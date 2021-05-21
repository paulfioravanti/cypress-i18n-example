import {
  ENGLISH_MENU_LABEL,
  ITALIAN_MENU_LABEL,
  JAPANESE_MENU_LABEL,
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
      cy.displaysItalian(APP_URL)
    })
  })

  context("when changing to Japanese and reloading the page", () => {
    beforeEach(() => {
      cy.get("li").contains(JAPANESE_MENU_LABEL).click()
      cy.reload(true)
    })

    it("still displays Japanese", () => {
      cy.displaysJapanese(APP_URL)
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
      cy.displaysEnglish(APP_URL)
    })
  })
})
