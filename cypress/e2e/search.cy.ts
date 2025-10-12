describe("search products", () => {
	it("should be able to search for products", () => {
		cy.searchByQuery("moletom")

		cy.url().should("include", "/search")
		cy.url().should("include", "q=moletom")

		cy.get("a[href^='/product'").should("exist")
	})

	it("should not able able to visit search page without a query", () => {
		cy.visit("/search")

		cy.location("pathname").should("equal", "/")
	})
})
