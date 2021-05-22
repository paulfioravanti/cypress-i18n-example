Cypress.env("APPLICATIONS").forEach(({ name, url }) => {
  describe(`${name}: storing language setting`, () => {
    const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

    beforeEach(() => {
      cy.visit(url)
      cy.clickLanguageMenu()
    })

    context("when changing to Italian and reloading the page", () => {
      beforeEach(() => {
        cy.clickItalian()
        cy.reload(true)
      })

      it("still displays Italian", () => {
        cy.displaysItalian(name)
      })
    })

    context("when changing to Japanese and reloading the page", () => {
      beforeEach(() => {
        cy.clickJapanese()
        cy.reload(true)
      })

      it("still displays Japanese", () => {
        cy.displaysJapanese(name)
      })
    })

    context("when changing to English and reloading the page", () => {
      before(() => {
        // Start in a non-English language.
        cy.storeLanguage(name, JAPANESE_LANGUAGE)
      })

      beforeEach(() => {
        cy.clickEnglish()
        cy.reload(true)
      })

      it("still displays English", () => {
        cy.displaysEnglish(name)
      })
    })
  })
})
