import {
  ENGLISH_MENU_LABEL,
  ITALIAN_MENU_LABEL,
  JAPANESE_MENU_LABEL,
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
      cy.displaysItalian(APP_URL)
    })
  })

  context("to Japanese", () => {
    beforeEach(() => {
      cy.get("li").contains(JAPANESE_MENU_LABEL).click()
    })

    it("displays Japanese", () => {
      cy.displaysJapanese(APP_URL)
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
      cy.displaysEnglish(APP_URL)
    })
  })
})
