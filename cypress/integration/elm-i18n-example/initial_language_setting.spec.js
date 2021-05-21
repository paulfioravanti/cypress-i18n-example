import {
  ENGLISH_BODY,
  ENGLISH_TITLE_ELM,
  ITALIAN_BODY,
  ITALIAN_TITLE_ELM,
  JAPANESE_BODY,
  JAPANESE_TITLE_ELM,
} from "../../support/constants"

describe("elm-i18n: initial language setting", () => {
  const STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
  const APP_URL = Cypress.env("ELM_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
  })

  context("when set to English", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, "en")
    })

    it("displays English", () => {
      cy.title().should("eq", ENGLISH_TITLE_ELM)
      cy.get("h1").should("contain", ENGLISH_BODY)
    })
  })

  context("when set to Italian", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, "it")
    })

    it("displays Italian", () => {
      cy.title().should("eq", ITALIAN_TITLE_ELM)
      cy.get("h1").should("contain", ITALIAN_BODY)
    })
  })

  context("when set to Japanese", () => {
    before(() => {
      localStorage.setItem(STORAGE_KEY, "ja")
    })

    it("displays Japanese", () => {
      cy.title().should("eq", JAPANESE_TITLE_ELM)
      cy.get("h1").should("contain", JAPANESE_BODY)
    })
  })

  context("when not set at all", () => {
    it("displays English", () => {
      cy.title().should("eq", ENGLISH_TITLE_ELM)
      cy.get("h1").should("contain", ENGLISH_BODY)
    })
  })
})
