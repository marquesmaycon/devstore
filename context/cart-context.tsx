"use client"

import { createContext, useContext, useState } from "react"

type CartItem = {
	productId: string
	quantity: number
}

type CartContextType = {
	items: CartItem[]
	addToCart: (productId: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	function addToCart(productId: string) {
		setCartItems((state) => {
			const productInCart = state.find((item) => item.productId === productId)
			if (productInCart) {
				return state.map((item) =>
					item.productId === productId
						? { ...item, quantity: item.quantity + 1 }
						: item,
				)
			}
			return [...state, { productId, quantity: 1 }]
		})
	}

	return (
		<CartContext.Provider value={{ items: cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error("useCart must be used within a CartProvider")
	}
	return context
}
