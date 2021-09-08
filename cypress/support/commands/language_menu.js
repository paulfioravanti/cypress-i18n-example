import {
  ENGLISH_MENU_LABEL,
  ITALIAN_MENU_LABEL,
  JAPANESE_MENU_LABEL,
} from "./constants"

Cypress.Commands.add("clickLanguageMenu", () => {
  cy.get("p").click()
})

Cypress.Commands.add("clickEnglish", () => {
  clickMenuLabel(ENGLISH_MENU_LABEL)
})

Cypress.Commands.add("clickItalian", () => {
  clickMenuLabel(ITALIAN_MENU_LABEL)
})

Cypress.Commands.add("clickJapanese", () => {
  clickMenuLabel(JAPANESE_MENU_LABEL)
})

function clickMenuLabel(label) {
  // NOTE: { force: true } added for the Phoenix application's sake. There
  // would seem to be times during the "changing language" and "storing language
  // setting" tests where the click to open the menu does not register or just
  // gets lost, leading to the CSS of the dropdown menu still being set to
  // display: none :(
  // It would be great to be able to remove { force: true } in the future...
  cy.get("li").contains(label).click({ force: true })
}
