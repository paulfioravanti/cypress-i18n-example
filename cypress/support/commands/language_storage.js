const {
  ELM_APP_NAME,
  ELM_STORAGE_KEY,
  PHX_STORAGE_KEY
} = Cypress.env()

Cypress.Commands.add("storeLanguage", (appName, language) => {
  if (appName === ELM_APP_NAME) {
    localStorage.setItem(ELM_STORAGE_KEY, language)
  } else {
    cy.setCookie(PHX_STORAGE_KEY, language)
  }
})
