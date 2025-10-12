import { api } from "@/data/api"
import type { Product } from "@/data/types/product"

export async function getProduct(slug: string): Promise<Product> {
	const resp = await api(`/products/${slug}`, {
		next: { revalidate: 60 * 60 },
	})
	return resp.json()
}
