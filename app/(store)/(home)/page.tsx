import ProductCard from "@/components/product-card"
import { api } from "@/data/api"
import type { Product } from "@/data/types/product"

async function getFeaturedProducts(): Promise<Product[]> {
	const resp = await api("/products/featured")
	return await resp.json()
}

export default async function Home() {
	const products = await getFeaturedProducts()

	return (
		<div className="grid grid-cols-9 grid-rows-6 gap-6 max-h-[860px]">
			{products.map((p, i) => (
				<ProductCard key={p.id} product={p} index={i} />
			))}
		</div>
	)
}
