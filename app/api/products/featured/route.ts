import { NextResponse } from "next/server"
import data from "../data.json"

export async function GET() {
	await new Promise((resolve) => setTimeout(resolve, 15000))
	const featuredProducts = data.products.filter(({ featured }) => featured)
	return NextResponse.json(featuredProducts)
}
