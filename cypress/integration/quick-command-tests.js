const url = "https://qc-engine.herokuapp.com/api";

describe('QuickCommand', () => {

  beforeEach('visit the host url', () => {
    cy.visit(`http://localhost:3000/`)
  })
  describe('dashboard view', () => {
    it('Has a location', () => {
      cy.location().should((loc) => {
        expect(loc.port).to.eq('3000')
        expect(loc.protocol).to.eq('http:')
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.toString()).to.eq(
          'http://localhost:3000/'
        )
      })
    })

    it('has a header with navlinks and title', () => {
      cy.get('.site-header').contains('QuickCommand')
        .get('a[data-cy=database-btn]').contains('DATABASE')
        .get('a[data-cy=incidents-btn]').contains('INCIDENTS')
    })

    it('has a section that lists current ongoing incidents', () => {
      cy.get('.incidents-menu').should('have.length', '1')
        .get('h2[data-cy=ongoing-incidents]').contains('ONGOING INCIDENTS')
    })

    it('has a form to submit declaration of a new incidents', () => {
      cy.get('h2[data-cy=declare-incident]').contains('DECLARE NEW INCIDENT:')
        .get('label[data-cy=incident-date]').contains('Incident Date:')
        .get('label[data-cy=incident-summary]').contains('Incident Summary:')
        .get('label[data-cy=incident-name]').contains('Incident Name:')
        .get('label[data-cy=incident-type]').contains('Incident Type:')
        .get('button[data-cy=declare-submission]').contains('DECLARE')



    })

  })
  it('dummy test', () => {

  })



})