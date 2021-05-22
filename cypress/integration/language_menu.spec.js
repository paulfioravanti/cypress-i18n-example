Cypress.env("APPLICATIONS").forEach(({ name, url }) => {
  describe(`${name}: the language menu`, () => {
    beforeEach(() => {
      cy.visit(url)
    })

    context("default state", () => {
      it("is not visible", () => {
        cy.get("ul").not("be.visible")
      })
    })

    context("opening the menu", () => {
      beforeEach(() => {
        cy.clickLanguageMenu()
      })

      it("becomes visible", () => {
        cy.get("ul").should("be.visible")
      })
    })

    context("closing the menu", () => {
      beforeEach(() => {
        cy.clickLanguageMenu()
      })

      context("by clicking the open menu", () => {
        beforeEach(() => {
          cy.clickLanguageMenu()
        })

        it("becomes invisible", () => {
          cy.get("ul").not("be.visible")
        })
      })

      context("by clicking elsewhere on the page when menu is open", () => {
        beforeEach(() => {
          cy.get("article").click()
        })

        it("becomes invisible", () => {
          cy.get("ul").not("be.visible")
        })
      })

      context("by changing language", () => {
        beforeEach(() => {
          cy.clickJapanese()
        })

        it("becomes invisible", () => {
          cy.get("ul").not("be.visible")
        })
      })
    })
  })
})
