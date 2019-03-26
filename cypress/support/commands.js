import { searchForm, cardDesk } from '../selectors'
import testData from '../fixtures/testData.json'

Cypress.Commands.add('initTestData', () => {
  window.localStorage.setItem('redux', JSON.stringify(testData));
});

Cypress.Commands.add('clearBrowserStorages', () => cy.clearLocalStorage());

Cypress.Commands.add('openMainPage', () => {
  cy.visit('/');
});

Cypress.Commands.add('fillSearchForm', ({ name, city }) => {
  if(name) {
    cy.get(searchForm.name.input).type(name);
  }
  if(city) {
    cy.get(searchForm.city.input).type(city);
  }
});

Cypress.Commands.add('submitSearchForm', () => {
  cy.get(searchForm.submitBtn).click();
});

Cypress.Commands.add('clearSearchForm', () => {
  cy.get(searchForm.clearBtn).click();
});

Cypress.Commands.add('moveCardNext', (params) => {
  cy.get(cardDesk.card.nextBtn(params)).click();
});

Cypress.Commands.add('moveCardPrev', (params) => {
  cy.get(cardDesk.card.prevBtn(params)).click();
});