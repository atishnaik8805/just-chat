describe('Cypress', () => {
    it('is working', () => {
      expect(true).toEqual(true);
    });
  
    it('visits the app', () => {
      cy.visit('/');
    });
  });