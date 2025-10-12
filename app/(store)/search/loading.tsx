"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "@/components/skeleton"

function SearchLoadingContent() {
	const searchParams = useSearchParams()
	const query = searchParams.get("q")
	return (
		<p>
			Resultados para: <span className="font-semibold">{query}</span>
		</p>
	)
}

export default function Loading() {
	return (
		 <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <SearchLoadingContent />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
	)
}
