import { cardDesk } from '../selectors'
import testData from '../fixtures/testData.json'


describe('Card desk', () => {
  it('should handle card movement to the right', () => {
    const targetMember = testData.data.find(item => item.hiringStage === 'applied');
    const targetMemberUuid = targetMember.login.uuid;
    
    cy.moveCardNext({ uuid: targetMemberUuid, column: 'applied' });
    cy.get(cardDesk.card.container({ uuid: targetMemberUuid, column: 'interviewing' })).should('be.visible');
    cy.moveCardNext({ uuid: targetMemberUuid, column: 'interviewing' });
    cy.get(cardDesk.card.container({ uuid: targetMemberUuid, column: 'hired' })).should('be.visible');
  });

  it('should handle card movement to the left', () => {
    const targetMember = testData.data.find(item => item.hiringStage === 'hired');
    const targetMemberUuid = targetMember.login.uuid;
    
    cy.moveCardPrev({ uuid: targetMemberUuid, column: 'hired' });
    cy.get(cardDesk.card.container({ uuid: targetMemberUuid, column: 'interviewing' })).should('be.visible');
    cy.moveCardPrev({ uuid: targetMemberUuid, column: 'interviewing' });
    cy.get(cardDesk.card.container({ uuid: targetMemberUuid, column: 'applied' })).should('be.visible');
  });
})