describe("elm-i18n: initial language setting", () => {
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
  const APP_URL = Cypress.env("ELM_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, "en")
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, "it")
    })

    it("displays Italian", () => {
      cy.displaysItalian(APP_URL)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, "ja")
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
