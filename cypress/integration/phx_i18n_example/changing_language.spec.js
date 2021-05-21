describe("phx_i18n_example: changing language", () => {
  const APP_URL = Cypress.env("PHX_APP_URL")
  const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

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
      cy.storeLanguage(APP_URL, JAPANESE_LANGUAGE)
    })

    beforeEach(() => {
      cy.clickEnglish()
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })
})
