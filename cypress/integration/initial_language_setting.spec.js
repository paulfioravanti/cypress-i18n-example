Cypress.env("APPLICATIONS").forEach(({ name, url }) => {
  describe(`${name}: initial language setting`, () => {
    const ENGLISH_LANGUAGE = Cypress.env("ENGLISH_LANGUAGE")
    const ITALIAN_LANGUAGE = Cypress.env("ITALIAN_LANGUAGE")
    const JAPANESE_LANGUAGE = Cypress.env("JAPANESE_LANGUAGE")

    beforeEach(() => {
      cy.visit(url)
    })

    context("when set to English", () => {
      before(() => {
        cy.storeLanguage(name, ENGLISH_LANGUAGE)
      })

      it("displays English", () => {
        cy.displaysEnglish(name)
      })
    })

    context("when set to Italian", () => {
      before(() => {
        cy.storeLanguage(name, ITALIAN_LANGUAGE)
      })

      it("displays Italian", () => {
        cy.displaysItalian(name)
      })
    })

    context("when set to Japanese", () => {
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
