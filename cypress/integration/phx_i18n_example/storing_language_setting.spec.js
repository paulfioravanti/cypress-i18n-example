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

describe("phx-i18n: storing language setting", () => {
  const STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")
  const APP_URL = Cypress.env("PHX_APP_URL")

  beforeEach(() => {
    cy.visit(APP_URL)
    cy.get("p").click()
  })

  context("when changing to Italian and reloading the page", () => {
    beforeEach(() => {
      cy.get("li").contains(ITALIAN_MENU_LABEL).click()
      cy.reload(true)
    })

    it("still displays Italian", () => {
      cy.title().should("eq", ITALIAN_TITLE_PHOENIX)
      cy.get("h1").should("contain", ITALIAN_BODY)
    })
  })

  context("when changing to Japanese and reloading the page", () => {
    beforeEach(() => {
      cy.get("li").contains(JAPANESE_MENU_LABEL).click()
      cy.reload(true)
    })

    it("still displays Japanese", () => {
      cy.title().should("eq", JAPANESE_TITLE_PHOENIX)
      cy.get("h1").should("contain", JAPANESE_BODY)
    })
  })

  context("when changing to English and reloading the page", () => {
    before(() => {
      // Start in a non-English language.
      cy.setCookie(STORAGE_KEY, "ja")
    })

    beforeEach(() => {
      cy.get("li").contains(ENGLISH_MENU_LABEL).click()
      cy.reload(true)
    })

    it("still displays English", () => {
      cy.title().should("eq", ENGLISH_TITLE_PHOENIX)
      cy.get("h1").should("contain", ENGLISH_BODY)
    })
  })
})
