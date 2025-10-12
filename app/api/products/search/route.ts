import { type NextRequest, NextResponse } from "next/server"
import z from "zod"

import data from "../data.json"

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl

	const query = z.string().parse(searchParams.get("q"))

	const products = data.products.filter((p) =>
		p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
	)

	if (products.length === 0) {
		return NextResponse.json({ message: "Product not found" }, { status: 404 })
	}

	return NextResponse.json(products)
}
