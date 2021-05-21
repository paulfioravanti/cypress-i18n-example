# Cypress I18n Example

A [Cypress][] test suite designed to test the following applications:

- [Elm I18n Example][]
- [Phoenix LiveView I18n Example][]

Both the applications are exactly the same, except one is implemented in
[Elm][], and the other using [Phoenix][].

Cypress is an [end-to-end test framework][Cypress How it works], and does not
care about application internals.

Therefore, the idea is that a single set of Cypress tests should be able to test
both of these applications, avoiding the need to write two separate test suites
in the respective application languages.

## Setup

```sh
git clone https://github.com/paulfioravanti/cypress-i18n-example.git
cd cypress-i18n-example
npm install
```

### Setup Applications Under Test

See the README files of the respective applications listed above to get them
set up. Cypress will assume both applications are running on their default URLs
and ports.

## Run Tests

```sh
npm run cypress:open
```

The Cypress application should automatically open, where the tests can be run.

[Cypress]: https://www.cypress.io/
[Cypress How it works]: https://www.cypress.io/how-it-works/
[Elm]: https://elm-lang.org/
[Elm I18n Example]: https://github.com/paulfioravanti/elm-i18n-example
[Phoenix]: https://www.phoenixframework.org/
[Phoenix LiveView I18n Example]: https://github.com/paulfioravanti/phx_i18n_example
