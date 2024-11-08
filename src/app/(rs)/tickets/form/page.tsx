import { getCustomer } from '@/lib/queries/getCustomer'
import { getTicket } from '@/lib/queries/getTicket'
import { BackButton } from '@/components/BackButton'
import * as Sentry from '@sentry/nextjs'

export default async function TicketFormPage({
	searchParams
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>
}) {
	try {
		const { customerId, ticketId } = await searchParams
		if (!customerId && !ticketId) {
			return (
				<>
					<h2 className="text-2xl mb-2">Ticket ID or Customer ID required to load ticket form</h2>
					<BackButton title="Go Back" />
				</>
			)
		}
		if (customerId) {
			const customer = await getCustomer(parseInt(customerId))
			if (!customerId) {
				return (
					<>
						<h2 className="text-2xl mb-2">Ticket ID or Customer ID required to load ticket form</h2>
						<BackButton title="Go Back" />
					</>
				)
			}
			if (!customer.active) {
				return (
					<>
						<h2 className="text-2xl mb-2">Customer ID #{customerId} is not active</h2>
						<BackButton title="Go Back" />
					</>
				)
			}
		}
		if (ticketId) {
			const ticket = await getTicket(parseInt(ticketId))
			if (!ticket) {
				return (
					<>
						<h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
						<BackButton title="Go Back" />
					</>
				)
			}
			const customer = await getCustomer(ticket.customerId)
		}
	} catch (e) {
		if (e instanceof Error) {
			Sentry.captureException(e)
			throw e
		}
	}
}
