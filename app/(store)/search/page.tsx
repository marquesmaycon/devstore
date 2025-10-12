import { redirect } from "next/navigation"

import ProductCard from "@/components/product-card"
import { api } from "@/data/api"
import type { Product } from "@/data/types/product"

type SearchProps = {
	searchParams: Promise<{ q: string | undefined }>
}

async function searchProducts(query: string): Promise<Product[]> {
	const resp = await api(`/products/search?q=${query}`, {
		next: { revalidate: 60 * 60 },
	})
	return await resp.json()
}

export default async function Search({ searchParams }: SearchProps) {
	const { q: query } = await searchParams

	if (!query) {
		redirect("/")
	}

	const products = await searchProducts(query)

	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm">
				Resultados para: <span className="font-semibold">moletom</span>
			</p>
			<div className="grid grid-cols-3 gap-6">
				{products?.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className="col-span-1 row-span-1 first:col-span-1 first:row-span-1"
					/>
				))}
			</div>
		</div>
	)
}
