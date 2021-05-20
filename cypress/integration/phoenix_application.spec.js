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
} from "../support/constants"

describe("Phoenix i18n application", () => {
  const LANGUAGE_KEY = Cypress.env("phxLanguageKey")
  const URL = Cypress.env("phxAppUrl")

  beforeEach(() => {
    cy.visit(URL)
  })

  describe("initial language setting", () => {
    context("when set to English", () => {
      before(() => {
        cy.setCookie(LANGUAGE_KEY, "en")
      })

      it("displays English", () => {
        cy.title().should("eq", ENGLISH_TITLE_PHOENIX)
        cy.get("h1").should("contain", ENGLISH_BODY)
      })
    })

    context("when set to Italian", () => {
      before(() => {
        cy.setCookie(LANGUAGE_KEY, "it")
      })

      it("displays Italian", () => {
        cy.title().should("eq", ITALIAN_TITLE_PHOENIX)
        cy.get("h1").should("contain", ITALIAN_BODY)
      })
    })

    context("when set to Japanese", () => {
      before(() => {
        cy.setCookie(LANGUAGE_KEY, "ja")
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

  describe("the language menu", () => {
    context("default state", () => {
      it("is not visible", () => {
        cy.get("ul").not("be.visible")
      })
    })

    context("opening the menu", () => {
      beforeEach(() => {
        cy.get("p").click()
      })

      it("becomes visible", () => {
        cy.get("ul").should("be.visible")
      })
    })

    context("closing the menu", () => {
      beforeEach(() => {
        cy.get("p").click()
      })

      context("by clicking the open menu", () => {
        beforeEach(() => {
          cy.get("p").click()
        })

        it("becomes invisible", () => {
          cy.get("ul").not("be.visible")
        })
      })

      context("by clicking anywhere else on the page when menu is open", () => {
        beforeEach(() => {
          cy.get("article").click()
        })

        it("becomes invisible", () => {
          cy.get("ul").not("be.visible")
        })
      })
    })
  })

  describe("changing language", () => {
    beforeEach(() => {
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
        cy.setCookie(LANGUAGE_KEY, "ja")
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

  describe("storing language setting", () => {
    beforeEach(() => {
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
        cy.setCookie(LANGUAGE_KEY, "ja")
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
})
