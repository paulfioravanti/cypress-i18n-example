Cypress.env("APPLICATIONS").forEach(({ name, url }) => {
  describe(`${name}: initial language setting`, () => {
    beforeEach(() => {
      cy.visit(url)
    })

    context("when set to English", () => {
      const ENGLISH_LANGUAGE = Cypress.env("ENGLISH_LANGUAGE")

      before(() => {
        cy.storeLanguage(name, ENGLISH_LANGUAGE)
      })

      it("displays English", () => {
        cy.displaysEnglish(name)
      })
    })

    context("when set to Italian", () => {
      const ITALIAN_LANGUAGE = Cypress.env("ITALIAN_LANGUAGE")

      before(() => {
        cy.storeLanguage(name, ITALIAN_LANGUAGE)
      })

      it("displays Italian", () => {
        cy.displaysItalian(name)
      })
    })

    context("when set to Japanese", () => {
      const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

      before(() => {
        cy.storeLanguage(name, JAPANESE_LANGUAGE)
      })

      it("displays Japanese", () => {
        cy.displaysJapanese(name)
      })
    })

    context("when not set at all", () => {
      it("displays English", () => {
        cy.displaysEnglish(name)
      })
    })
  })
})
