"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "@/components/skeleton"

function SearchLoadingContent() {
	const searchParams = useSearchParams()
	const query = searchParams.get("q")
	return (
		<div className="flex flex-col gap-4 overflow-clip">
			<p>
				Resultados para: <span className="font-semibold">{query}</span>
			</p>
			<div className="grid grid-cols-3 gap-6">
				<Skeleton className="h-[380px]" />
				<Skeleton className="h-[380px]" />
				<Skeleton className="h-[380px]" />
				<Skeleton className="h-[380px]" />
				<Skeleton className="h-[380px]" />
				<Skeleton className="h-[380px]" />
			</div>
		</div>
	)
}

export default function Loading() {
	return (
		<Suspense fallback={
			<div className="flex flex-col gap-4 overflow-clip">
				<p>Carregando resultados...</p>
				<div className="grid grid-cols-3 gap-6">
					<Skeleton className="h-[380px]" />
					<Skeleton className="h-[380px]" />
					<Skeleton className="h-[380px]" />
					<Skeleton className="h-[380px]" />
					<Skeleton className="h-[380px]" />
					<Skeleton className="h-[380px]" />
				</div>
			</div>
		}>
			<SearchLoadingContent />
		</Suspense>
	)
}
