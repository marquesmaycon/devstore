"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartWidget() {
	const { items } = useCart()
	return (
		<div className="flex items-center gap-2">
			<ShoppingBag className="size-4" />
			<div className="text-sm">Cart ({items.length})</div>
		</div>
	)
}
