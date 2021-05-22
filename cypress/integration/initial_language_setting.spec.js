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
        cy.storeLanguage(url, ENGLISH_LANGUAGE)
      })

      it("displays English", () => {
        cy.displaysEnglish(url)
      })
    })

    context("when set to Italian", () => {
      before(() => {
        cy.storeLanguage(url, ITALIAN_LANGUAGE)
      })

      it("displays Italian", () => {
        cy.displaysItalian(url)
      })
    })

    context("when set to Japanese", () => {
      before(() => {
        cy.storeLanguage(url, JAPANESE_LANGUAGE)
      })

      it("displays Japanese", () => {
        cy.displaysJapanese(url)
      })
    })

    context("when not set at all", () => {
      it("displays English", () => {
        cy.displaysEnglish(url)
      })
    })
  })
})
