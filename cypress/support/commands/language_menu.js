import {
  ENGLISH_MENU_LABEL,
  ITALIAN_MENU_LABEL,
  JAPANESE_MENU_LABEL,
} from "./constants"

Cypress.Commands.add("clickEnglish", () => {
  clickMenuLabel(ENGLISH_MENU_LABEL)
})

Cypress.Commands.add("clickItalian", () => {
  clickMenuLabel(ITALIAN_MENU_LABEL)
})

Cypress.Commands.add("clickJapanese", () => {
  clickMenuLabel(JAPANESE_MENU_LABEL)
})

Cypress.Commands.add("clickLanguageMenu", () => {
  cy.get("p").click()
})

function clickMenuLabel(label) {
  cy.get("li").contains(label).click()
}
