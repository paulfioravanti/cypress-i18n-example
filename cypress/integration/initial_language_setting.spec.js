const {
  APPLICATIONS,
  ENGLISH_LANGUAGE,
  ITALIAN_LANGUAGE,
  JAPANESE_LANGUAGE
} = Cypress.env()

APPLICATIONS.forEach(({ name, url }) => {
  describe(`${name}: initial language setting`, () => {
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

    context("when set to an unknown language", () => {
      before(() => {
        cy.storeLanguage(name, "fr")
      })

      it("displays English", () => {
        cy.displaysEnglish(name)
      })
    })

    context("when not set at all", () => {
      it("displays English", () => {
        cy.displaysEnglish(name)
      })
    })
  })
})
