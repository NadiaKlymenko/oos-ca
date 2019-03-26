import { searchForm, cardDesk } from '../selectors'
import testData from '../fixtures/testData.json'

describe('Members search', () => {
  it('should search by name if member exists', () => {
    const targetMember = testData.data[0];
    const name = targetMember.name.first;

    cy.fillSearchForm({ name });
    cy.submitSearchForm();
    cy.get(cardDesk.card.container()).should('have.length', 1);
    cy.get(cardDesk.card.container({ uuid: targetMember.login.uuid })).should('be.visible');
  })

  it('should search by lastname if member exists', () => {
    const targetMember = testData.data[0];
    const name = targetMember.name.last;

    cy.fillSearchForm({ name });
    cy.submitSearchForm();
    cy.get(cardDesk.card.container()).should('have.length', 1);
    cy.get(cardDesk.card.container({ uuid: targetMember.login.uuid })).should('be.visible');
  })

  it('should search by full name if member exists', () => {
      const targetMember = testData.data[0];
      const name = `${targetMember.name.first} ${targetMember.name.last}`;

      cy.fillSearchForm({ name });
      cy.submitSearchForm();
      cy.get(cardDesk.card.container()).should('have.length', 1);
      cy.get(cardDesk.card.container({ uuid: targetMember.login.uuid })).should('be.visible');
  })
  
  it('should be empty for invalid name search', () => {
    const name = 'Invalid name';

    cy.fillSearchForm({ name });
    cy.submitSearchForm();
    cy.get(cardDesk.card.container()).should('have.length', 0);
  })

  it('should search by city if member exists', () => {
    const targetMember = testData.data[0];
    const city = targetMember.location.city;

    cy.fillSearchForm({ city });
    cy.submitSearchForm();
    cy.get(cardDesk.card.container()).should('have.length', 1);
    cy.get(cardDesk.card.container({ uuid: targetMember.login.uuid })).should('be.visible');
  })

  it('should show all members if clear button clicked', () => {
    const targetMember = testData.data[0];
    const name = targetMember.name.first;

    cy.fillSearchForm({ name });
    cy.submitSearchForm();
    cy.clearSearchForm();
    cy.get(cardDesk.card.container()).should('have.length', testData.data.length);
  })

  it('should clear filter fields if clear button clicked', () => {
    const targetMember = testData.data[0];
    const name = targetMember.name.first;
    const city = targetMember.location.city;

    cy.fillSearchForm({ name, city });
    cy.clearSearchForm();
    cy.get(searchForm.name.input).should('have.value', '');
    cy.get(searchForm.city.input).should('have.value', '');
  })
})
