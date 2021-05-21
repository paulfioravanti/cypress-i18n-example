Cypress.env("APPLICATIONS").forEach(({ name, url }) => {
  describe(`${name}: initial language setting`, () => {
    beforeEach(() => {
      cy.visit(url)
    })

    context("when set to English", () => {
      before(() => {
        cy.storeLanguage(url, "en")
      })

      it("displays English", () => {
        cy.displaysEnglish(url)
      })
    })

    context("when set to Italian", () => {
      before(() => {
        cy.storeLanguage(url, "it")
      })

      it("displays Italian", () => {
        cy.displaysItalian(url)
      })
    })

    context("when set to Japanese", () => {
      before(() => {
        cy.storeLanguage(url, "ja")
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
