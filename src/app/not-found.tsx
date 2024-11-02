import { Header } from '@/components/Header'
import Image from 'next/image'
export const metadata = {
	title: 'Page not found'
}

export default function NotFound() {
	return (
		<div className="px-2 w-full">
			<Header />
			<div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
				<h2 className="text-2xl">Page not found</h2>
				<Image
					src="/images/not-found-1024x1024.png"
					className="m-0 rounded-xl"
					width={300}
					height={300}
					sizes="300px"
					alt="Page not found"
					priority={true}
					title="Page not found"
				/>
			</div>
		</div>
	)
}
