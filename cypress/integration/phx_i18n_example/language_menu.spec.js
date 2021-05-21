describe("phx_i18n_example: the language menu", () => {
  const APP_URL = Cypress.env("PHX_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
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

    context("by clicking anywhere else on the page when menu is open", () => {
      beforeEach(() => {
        cy.get("article").click()
      })

      it("becomes invisible", () => {
        cy.get("ul").not("be.visible")
      })
    })
  })
})
