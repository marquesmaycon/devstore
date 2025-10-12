"use client"

import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

import CartWidget from "./cart-widget"
import SearchForm from "./search-form"

export function Header() {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-5">
				<Link href="/" className="text-2xl font-extrabold text-white">
					devstore
				</Link>
				<Suspense fallback={<div className="w-[320px] h-[48px] bg-zinc-900 rounded-full animate-pulse" />}>
					<SearchForm />
				</Suspense>
			</div>
			<div className="flex items-center gap-4 ">
				<CartWidget />

				<div className="w-px bg-zinc-700 h-4" />

				<Link href="/" className="flex items-center gap-2 hover:underline">
					<div className="text-sm">Account</div>
					<Image
						src="https://github.com/marquesmaycon.png"
						alt="profile picture"
						className="size-6 rounded-full"
						width={24}
						height={24}
					/>
				</Link>
			</div>
		</div>
	)
}
