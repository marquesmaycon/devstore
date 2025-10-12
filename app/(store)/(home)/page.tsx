import ProductCard from "@/components/product-card"
import type { Product } from "@/data/types/product"
import data from "@/app/api/products/data.json"

async function getFeaturedProducts(): Promise<Product[]> {
	// Use direct import during build to avoid localhost fetch issues
	return data.products.filter(product => product.featured)
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
