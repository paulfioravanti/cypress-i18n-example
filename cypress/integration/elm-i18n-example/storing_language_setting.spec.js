describe("elm-18n-example: storing language setting", () => {
  const APP_URL = Cypress.env("ELM_APP_URL")
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
  const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

  beforeEach(() => {
    cy.visit(APP_URL)
    cy.clickLanguageMenu()
  })

  context("when changing to Italian and reloading the page", () => {
    beforeEach(() => {
      cy.clickItalian()
      cy.reload(true)
    })

    it("still displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("when changing to Japanese and reloading the page", () => {
    beforeEach(() => {
      cy.clickJapanese()
      cy.reload(true)
    })

    it("still displays Japanese", () => {
      cy.displaysJapanese(APP_URL)
    })
  })

  context("when changing to English and reloading the page", () => {
    before(() => {
      // Start in a non-English language.
      localStorage.setItem(STORAGE_KEY, JAPANESE_LANGUAGE)
    })

    beforeEach(() => {
      cy.clickEnglish()
      cy.reload(true)
    })

    it("still displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })
})
