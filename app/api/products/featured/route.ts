import { NextResponse } from "next/server"
import data from "../data.json"

export function GET() {
	const featuredProducts = data.products.filter(({ featured }) => featured)
	return NextResponse.json(featuredProducts)
}
