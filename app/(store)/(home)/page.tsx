import Image from "next/image"
import Link from "next/link"

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
				<Link
					key={p.id}
					href={`/product/${p.slug}`}
					className="group relative col-span-3 row-span-3 first:col-span-6 first:row-span-6 bg-zinc-900 rounded-lg overflow-hidden flex justify-center items-baseline"
				>
					<Image
						src={p.image}
						width={920}
						height={920}
						quality={100}
						alt=""
						className="group-hover:scale-105 transition-transform duration-500"
					/>
					<div
						className="absolute bottom-10 right-10 data-[first=true]:bottom-28 data-[first=true]:right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
						data-first={i === 0}
					>
						<span className="text-sm truncate">{p.title}</span>
						<span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
							{p.price.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
								maximumFractionDigits: 0,
							})}
						</span>
					</div>
				</Link>
			))}
		</div>
	)
}
