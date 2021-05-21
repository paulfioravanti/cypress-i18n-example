describe("elm-i18n: changing language", () => {
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
  const APP_URL = Cypress.env("ELM_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
    cy.get("p").click()
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
      localStorage.setItem(STORAGE_KEY, "ja")
    })

    beforeEach(() => {
      cy.clickEnglish()
    })

    it("displays English", () => {
      cy.displaysEnglish(APP_URL)
    })
  })
})
