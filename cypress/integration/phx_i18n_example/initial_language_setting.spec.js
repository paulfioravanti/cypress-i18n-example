describe("phx_i18n_example: initial language setting", () => {
  const APP_URL = Cypress.env("PHX_APP_URL")
  const ENGLISH_LANGUAGE = Cypress.env("ENGLISH_LANGUAGE")
  const ITALIAN_LANGUAGE = Cypress.env("ITALIAN_LANGUAGE")
  const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")
  const STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, ENGLISH_LANGUAGE)
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, ITALIAN_LANGUAGE)
    })

    it("displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, JAPANESE_LANGUAGE)
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
