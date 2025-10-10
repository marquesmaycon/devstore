import { env } from "@/env"

export function api(path: string, init?: RequestInit) {
	const baseUrl = env.NEXT_PUBLIC_API_URL
	const prefix = `/api${path.startsWith("/") ? "" : "/"}`
	const url = new URL(`${prefix}${path}`, baseUrl)

	return fetch(url, init)
}
