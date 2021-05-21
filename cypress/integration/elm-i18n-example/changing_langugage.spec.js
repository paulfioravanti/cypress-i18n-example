describe("elm-i18n-example: changing language", () => {
  const APP_URL = Cypress.env("ELM_APP_URL")
  const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")

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
      localStorage.setItem(STORAGE_KEY, JAPANESE_LANGUAGE)
    })

    beforeEach(() => {
      cy.clickEnglish()
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })
})
