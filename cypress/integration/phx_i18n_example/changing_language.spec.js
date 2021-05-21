describe("phx-i18n: changing language", () => {
  const STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")
  const APP_URL = Cypress.env("PHX_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
    cy.clickLanguageMenu()
  })

  context("to Italian", () => {
    beforeEach(() => {
      cy.clickItalian()
    })

    it("displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("to Japanese", () => {
    beforeEach(() => {
      cy.clickJapanese()
    })

    it("displays Japanese", () => {
      cy.displaysJapanese(APP_URL)
    })
  })

  context("to English", () => {
    before(() => {
      // Start in a non-English language.
      cy.setCookie(STORAGE_KEY, "ja")
    })

    beforeEach(() => {
      cy.clickEnglish()
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })
})
