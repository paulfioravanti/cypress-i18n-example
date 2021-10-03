// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "./commands/language_display"
import "./commands/language_menu.js"
import "./commands/language_storage.js"

// REF: https://github.com/cypress-io/cypress/issues/249#issuecomment-670028947
const COMMAND_DELAY = Cypress.env("COMMAND_DELAY") || 0
const commands = [
  "visit",
  "click",
  "trigger",
  "type",
  "clear",
  "reload",
  "contains"
]
if (COMMAND_DELAY > 0) {
  for (const command of commands) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
      const origVal = originalFn(...args);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(origVal)
        }, COMMAND_DELAY)
      })
    })
  }
}
