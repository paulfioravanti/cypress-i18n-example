describe("elm-i18n-example: initial language setting", () => {
  const APP_URL = Cypress.env("ELM_APP_URL")
  const ENGLISH_LANGUAGE = Cypress.env("ENGLISH_LANGUAGE")
  const ITALIAN_LANGUAGE = Cypress.env("ITALIAN_LANGUAGE")
  const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, ENGLISH_LANGUAGE)
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, ITALIAN_LANGUAGE)
    })

    it("displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, JAPANESE_LANGUAGE)
    })

    it("displays Japanese", () => {
      cy.displaysJapanese(APP_URL)
    })
  })

  context("when not set at all", () => {
    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })
})
