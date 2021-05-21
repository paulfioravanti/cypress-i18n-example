describe("elm-18n: storing language setting", () => {
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
  const APP_URL = Cypress.env("ELM_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
    cy.get("p").click()
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
      localStorage.setItem(STORAGE_KEY, "ja")
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
