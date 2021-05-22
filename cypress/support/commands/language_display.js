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

const ELM_APP_NAME = Cypress.env("ELM_APP_NAME")

Cypress.Commands.add("displaysEnglish", appName => {
  const title =
    appName === ELM_APP_NAME ? ENGLISH_TITLE_ELM : ENGLISH_TITLE_PHOENIX
  displays(title, ENGLISH_BODY)
})

Cypress.Commands.add("displaysItalian", appName => {
  const title =
    appName === ELM_APP_NAME ? ITALIAN_TITLE_ELM : ITALIAN_TITLE_PHOENIX
  displays(title, ITALIAN_BODY)
})

Cypress.Commands.add("displaysJapanese", appName => {
  const title =
    appName === ELM_APP_NAME ? JAPANESE_TITLE_ELM : JAPANESE_TITLE_PHOENIX
  displays(title, JAPANESE_BODY)
})

function displays(title, body) {
  cy.title().should("eq", title)
  cy.get("h1").should("contain", body)
}
