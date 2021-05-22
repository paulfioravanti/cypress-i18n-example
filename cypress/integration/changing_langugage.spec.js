Cypress.env("APPLICATIONS").forEach(({ name, url }) => {
  describe(`${name}: changing language`, () => {
    const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

    beforeEach(() => {
      cy.visit(url)
      cy.clickLanguageMenu()
    })

    context("to Italian", () => {
      beforeEach(() => {
        cy.clickItalian()
      })

      it("displays Italian", () => {
        cy.displaysItalian(name)
      })
    })

    context("to Japanese", () => {
      beforeEach(() => {
        cy.clickJapanese()
      })

      it("displays Japanese", () => {
        cy.displaysJapanese(name)
      })
    })

    context("to English", () => {
      before(() => {
        // Start in a non-English language.
        cy.storeLanguage(name, JAPANESE_LANGUAGE)
      })

      beforeEach(() => {
        cy.clickEnglish()
      })

      it("displays English", () => {
        cy.displaysEnglish(name)
      })
    })
  })
})
