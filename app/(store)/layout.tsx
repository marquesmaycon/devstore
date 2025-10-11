import { Header } from "@/components/header"
import { CartProvider } from "@/context/cart-context"

export default function StoreLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<CartProvider>
			<div className="mx-auto container min-h-screen grid grid-rows-[min-content_max-content] gap-5 p-8">
				<Header />
				{children}
			</div>
		</CartProvider>
	)
}
