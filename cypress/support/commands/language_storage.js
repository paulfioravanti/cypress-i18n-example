const [
  { name: ELM_APP_NAME, storageKey: ELM_STORAGE_KEY },
  { storageKey: PHX_STORAGE_KEY }
] = Cypress.env("APPLICATIONS")

Cypress.Commands.add("storeLanguage", (appName, language) => {
  if (appName === ELM_APP_NAME) {
    localStorage.setItem(ELM_STORAGE_KEY, language)
  } else {
    cy.setCookie(PHX_STORAGE_KEY, language)
  }
})
