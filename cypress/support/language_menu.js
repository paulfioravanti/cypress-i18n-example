import {
  ENGLISH_MENU_LABEL,
  ITALIAN_MENU_LABEL,
  JAPANESE_MENU_LABEL,
} from "./constants"

cy.clickEnglish = () => {
  clickMenuLabel(ENGLISH_MENU_LABEL)
}

cy.clickItalian = () => {
  clickMenuLabel(ITALIAN_MENU_LABEL)
}

cy.clickJapanese = () => {
  clickMenuLabel(JAPANESE_MENU_LABEL)
}

cy.clickLanguageMenu = () => {
  cy.get("p").click()
}

function clickMenuLabel(label) {
  cy.get("li").contains(label).click()
}
