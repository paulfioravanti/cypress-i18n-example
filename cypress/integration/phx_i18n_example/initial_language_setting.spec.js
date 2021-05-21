import {
  ENGLISH_BODY,
  ENGLISH_TITLE_PHOENIX,
  ITALIAN_BODY,
  ITALIAN_TITLE_PHOENIX,
  JAPANESE_BODY,
  JAPANESE_TITLE_PHOENIX
} from "../../support/constants"

describe("phx-i18n: initial language setting", () => {
  const STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")
  const APP_URL = Cypress.env("PHX_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, "en")
    })

    it("displays English", () => {
      cy.title().should("eq", ENGLISH_TITLE_PHOENIX)
      cy.get("h1").should("contain", ENGLISH_BODY)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, "it")
    })

    it("displays Italian", () => {
      cy.title().should("eq", ITALIAN_TITLE_PHOENIX)
      cy.get("h1").should("contain", ITALIAN_BODY)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      cy.setCookie(STORAGE_KEY, "ja")
    })

    it("displays Japanese", () => {
      cy.title().should("eq", JAPANESE_TITLE_PHOENIX)
      cy.get("h1").should("contain", JAPANESE_BODY)
    })
  })

  context("when not set at all", () => {
    it("displays English", () => {
      cy.title().should("eq", ENGLISH_TITLE_PHOENIX)
      cy.get("h1").should("contain", ENGLISH_BODY)
    })
  })
})
