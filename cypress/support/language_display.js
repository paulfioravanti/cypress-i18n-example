import {
  ENGLISH_BODY,
  ENGLISH_TITLE_ELM,
  ENGLISH_TITLE_PHOENIX,
  ITALIAN_BODY,
  ITALIAN_TITLE_ELM,
  ITALIAN_TITLE_PHOENIX,
  JAPANESE_BODY,
  JAPANESE_TITLE_ELM,
  JAPANESE_TITLE_PHOENIX,
} from "./constants"

const ELM_APP_URL = Cypress.env("ELM_APP_URL")

cy.displaysEnglish = appUrl => {
  const title =
    appUrl === ELM_APP_URL ? ENGLISH_TITLE_ELM : ENGLISH_TITLE_PHOENIX
  displays(title, ENGLISH_BODY)
}

cy.displaysItalian = appUrl => {
  const title =
    appUrl === ELM_APP_URL ? ITALIAN_TITLE_ELM : ITALIAN_TITLE_PHOENIX
  displays(title, ITALIAN_BODY)
}

cy.displaysJapanese = appUrl => {
  const title =
    appUrl === ELM_APP_URL ? JAPANESE_TITLE_ELM : JAPANESE_TITLE_PHOENIX
  displays(title, JAPANESE_BODY)
}

function displays(title, body) {
  cy.title().should("eq", title)
  cy.get("h1").should("contain", body)
}
