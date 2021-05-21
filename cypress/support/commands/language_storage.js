const ELM_APP_URL = Cypress.env("ELM_APP_URL")
const ELM_STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
const PHX_STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")

Cypress.Commands.add("storeLanguage", (appUrl, language) => {
  if (appUrl === ELM_APP_URL) {
    localStorage.setItem(ELM_STORAGE_KEY, language)
  } else {
    cy.setCookie(PHX_STORAGE_KEY, language)
  }
})
