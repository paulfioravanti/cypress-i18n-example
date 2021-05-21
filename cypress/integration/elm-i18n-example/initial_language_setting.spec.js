describe("elm-i18n-example: initial language setting", () => {
  const APP_URL = Cypress.env("ELM_APP_URL")
  const ENGLISH_LANGUAGE = Cypress.env("ENGLISH_LANGUAGE")
  const ITALIAN_LANGUAGE = Cypress.env("ITALIAN_LANGUAGE")
  const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      cy.storeLanguage(APP_URL, ENGLISH_LANGUAGE)
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      cy.storeLanguage(APP_URL, ITALIAN_LANGUAGE)
    })

    it("displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      cy.storeLanguage(APP_URL, JAPANESE_LANGUAGE)
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
