// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
<<<<<<< HEAD
=======
import './commands/language_display'
import './commands/language_menu.js'
import './commands/language_storage.js'
>>>>>>> 098e0e2 (Unify all tests)

// Alternatively you can use CommonJS syntax:
// require('./commands')

// NOTE: Sometimes, there seems to be unhandled exceptions thrown for what look
// like no reason. When that happens, this function can be helpful.
// REF: https://docs.cypress.io/api/events/catalog-of-events#Uncaught-Exceptions
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })
