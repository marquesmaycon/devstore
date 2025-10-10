import Header from "@/components/header"

export default function StoreLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="mx-auto container min-h-screen grid grid-rows-[min-content_max-content] gap-5 p-8">
			<Header />
			{children}
		</div>
	)
}
