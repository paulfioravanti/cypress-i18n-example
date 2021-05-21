import {
  ENGLISH_BODY,
  ENGLISH_MENU_LABEL,
  ENGLISH_TITLE_PHOENIX,
  ITALIAN_BODY,
  ITALIAN_MENU_LABEL,
  ITALIAN_TITLE_PHOENIX,
  JAPANESE_BODY,
  JAPANESE_MENU_LABEL,
  JAPANESE_TITLE_PHOENIX
} from "../../support/constants"

describe("phx-i18n: changing language", () => {
  const STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")
  const APP_URL = Cypress.env("PHX_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
    cy.get("p").click()
  })

  context("to Italian", () => {
    beforeEach(() => {
      cy.get("li").contains(ITALIAN_MENU_LABEL).click()
    })

    it("displays Italian", () => {
      cy.title().should("eq", ITALIAN_TITLE_PHOENIX)
      cy.get("h1").should("contain", ITALIAN_BODY)
    })
  })

  context("to Japanese", () => {
    beforeEach(() => {
      cy.get("li").contains(JAPANESE_MENU_LABEL).click()
    })

    it("displays Japanese", () => {
      cy.title().should("eq", JAPANESE_TITLE_PHOENIX)
      cy.get("h1").should("contain", JAPANESE_BODY)
    })
  })

  context("to English", () => {
    before(() => {
      // Start in a non-English language.
      cy.setCookie(STORAGE_KEY, "ja")
    })

    beforeEach(() => {
      cy.get("li").contains(ENGLISH_MENU_LABEL).click()
    })

    it("displays English", () => {
      cy.title().should("eq", ENGLISH_TITLE_PHOENIX)
      cy.get("h1").should("contain", ENGLISH_BODY)
    })
  })
})
