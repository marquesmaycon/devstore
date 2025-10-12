import z from "zod"

const envSchema = z.object({
	NEXT_PUBLIC_API_URL: z.url(),
	APP_URL: z.url(),
})

const { data, success, error } = envSchema.safeParse(process.env)

if (!success) {
	console.error("Invalid environment variables", z.treeifyError(error))

	throw new Error("Invalid environment variables")
}

export const env = data
