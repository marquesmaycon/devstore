import { type NextRequest, NextResponse } from "next/server"
import z from "zod"

import data from "../data.json"

export async function GET(
	_: NextRequest,
	ctx: RouteContext<"/api/products/[slug]">,
) {
	const { slug } = await ctx.params
	const parsedSlug = z.string().parse(slug)

	const product = data.products.find((p) => p.slug === parsedSlug)

	if (!product) {
		return NextResponse.json({ message: "Product not found" }, { status: 404 })
	}

	return NextResponse.json(product)
}
