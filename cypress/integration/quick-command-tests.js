const url = "https://qc-engine.herokuapp.com/api";

describe('QuickCommand', () => {

  beforeEach('visit the host url', () => {
    cy.visit(`http://localhost:3000/`)
  })

  describe('dashboard view (default view: INCIDENTS)', () => {
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

    it('has a header with navlinks a logo', () => {
      cy.get('.logo').should('exist')
        .get('a[data-cy=database-btn]').contains('PERSONNEL')
        .get('a[data-cy=incidents-btn]').contains('INCIDENTS')
    })

    it('has a footer with profile links and a documentation link', () => {
      cy.get('[data-cy=footer]').should('have.class', 'footer-container')
        .get('a[data-cy=passport-link]').click()
      cy.get('article[data-cy=passport-container]').should('have.class', 'passport-container')
        .get('[data-cy=passport-doc]').should('have.class', 'passport-doc')
        .get('a[data-cy=database-btn]').click()
      cy.get('a[data-cy=profiles-link]').click()
      cy.get('[data-cy=profiles]').should('have.class', 'profiles')
        .get('div[class=profile-single]').first().children().first()
        .should('have.attr', 'href')
        .get('a[target=_blank]').contains('Jeremiah')
    })

    it('has a section that lists current ongoing incidents', () => {
      cy.get('.incidents-menu').should('have.length', '1')
        .get('h2[data-cy=ongoing-incidents]').contains('ONGOING INCIDENTS')
    })

    it('has a form to submit declaration of a new incidents', () => {
      cy.get('h2[data-cy=declare-incident]').contains('DECLARE NEW INCIDENT:')
        .get('label[data-cy=incident-name]').contains('Incident Name:')
        .get('label[data-cy=incident-type]').contains('Incident Type:')
        .get('label[data-cy=incident-date]').contains('Incident Date:')
        .get('label[data-cy=incident-summary]').contains('Incident Summary:')
        .get('button[data-cy=declare-submission]').contains('DECLARE')
    })

    it('Declares an emergency and adds the new incident to the ongoing incidents panel', () => {
      cy.get('input[data-cy=incident-name]').type('San Andreas Faultline Disruption')
        .get('select[data-cy=incident-type]').select('Earthquake')
        .get('input[data-cy=incident-date]').type('2021-05-21')
        .get('textarea[data-cy=incident-summary]').type('5.4 Richter Scale quake has disrupted the village of Palo Alto')
        .get('button[data-cy=declare-submission]').click()
      // needs to be reworked since incidents are now declared via network request but the endpoint isn't working yet
      // cy.get('h3[data-cy=incident-name]').contains('San Andreas Faultline Disruption')
      //   .get('p[data-cy=incident-type]').contains('Earthquake')
      //   .contains('2021-05-21')
    })
  })

  describe('DATABASE view', () => {
    it('Shows a database of personnel', () => {
      cy.get('a[data-cy=database-btn]').click()
      cy.get('h2[data-cy=search-contacts]').contains('SEARCH CONTACTS')
      cy.get('h2[data-cy=add-new-contact]').contains('ADD NEW CONTACT')
    })
  })
})