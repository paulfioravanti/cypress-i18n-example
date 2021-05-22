const ELM_APP_NAME = Cypress.env("ELM_APP_NAME")
const ELM_STORAGE_KEY = Cypress.env("ELM_STORAGE_KEY")
const PHX_STORAGE_KEY = Cypress.env("PHX_STORAGE_KEY")

Cypress.Commands.add("storeLanguage", (appName, language) => {
  if (appName === ELM_APP_NAME) {
    localStorage.setItem(ELM_STORAGE_KEY, language)
  } else {
    cy.setCookie(PHX_STORAGE_KEY, language)
  }
})
