describe("phx-i18n: initial language setting", () => {
  const STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")
  const APP_URL = Cypress.env("PHX_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, "en")
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, "it")
    })

    it("displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, "ja")
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
