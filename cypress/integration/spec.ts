import { teamCardSelectors } from "src/app/team-card/team-card.selectors";

it('loads examples', () => {
  cy.visit('/');
  cy.get(teamCardSelectors.teamCardPopup("CD Olmedo")).click();
  cy.url().should('contains', '/#popupCD%20Olmedo');
});
