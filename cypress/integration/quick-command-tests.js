const baseURL = `https://qc-engine.herokuapp.com/api/v1`

describe('QuickCommand', () => {

  beforeEach('visit the host url', () => {
    cy.intercept(`${baseURL}/incidents?active=true`, { fixture: 'ongoing-incidents.json' })
    cy.intercept(`${baseURL}/incidents?active=false`, { fixture: 'resolved-incidents.json' })
    cy.visit(`http://localhost:3000/`)
  })

  describe('Dashboard Default View: Incidents', () => {

    it.skip('Has a location', () => {
      cy.location().should((loc) => {
        expect(loc.port).to.eq('3000')
        expect(loc.protocol).to.eq('http:')
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.toString()).to.eq(
          'http://localhost:3000/'
        )
      })
    })

    it.skip('has a header with navlinks a logo', () => {
      cy.get('.logo').should('exist')
        .get('a[data-cy=database-btn]').contains('PERSONNEL')
        .get('a[data-cy=incidents-btn]').contains('INCIDENTS')
    })

    it.skip('has a footer with profile links and a documentation link', () => {
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

    it.skip('has a section that lists current ongoing incidents', () => {
      cy.get('.incidents-menu').should('have.length', '1')
        .get('h2[data-cy=ongoing-incidents]').contains('ONGOING INCIDENTS')
    })

    it.skip('has a form to submit declaration of a new incidents', () => {
      cy.get('h2[data-cy=declare-incident]').contains('DECLARE NEW INCIDENT:')
        .get('label[data-cy=incident-name]').contains('Name:')
        .get('label[data-cy=incident-type]').contains('Type:')
        .get('label[data-cy=incident-date]').contains('Date:')
        .get('label[data-cy=incident-summary]').contains('Summary:')
        .get('button[data-cy=declare-submission]').contains('DECLARE')
    })

    it.skip('Declares an emergency and adds the new incident to the ongoing incidents panel', () => {
      cy.get('input[data-cy=incident-name]').type('San Andreas Faultline Disruption')
        .get('select[data-cy=incident-type]').select('Earthquake')
        .get('input[data-cy=incident-date]').type('2021-05-21')
        .get('textarea[data-cy=incident-summary]').type('5.4 Richter Scale quake has disrupted the village of Palo Alto')
      cy.intercept(`${baseURL}/incidents`, {
        method: 'POST',
        fixture: 'declare-incident.json'
      })
      cy.get('button[data-cy=declare-submission]').click()

      cy.get('[data-cy=ongoing-container]')
        // .contains('Jim Creeks Fire')
        .get('[data-cy=declared-date]').contains('DECLARED')
    })
  })


  describe('The Incident Contacts Chart', () => {

    beforeEach('intercept the incident contacts request', () => {
      cy.intercept(`${baseURL}/incidents/3/contacts`, { fixture: 'contacts-by-incident-id.json' })
    })

    it.skip('displays a set of contacts pertaining to a particular incident', () => {
      cy.get('[data-cy=declared-date]').first()
      //.click()   > CHART CURRENTLY HAS NO ROOT
    })
  })

  describe('Personnel view', () => {
    it.skip('Shows a database of personnel', () => {
      cy.get('a[data-cy=database-btn]').click()
      cy.get('h2[data-cy=search-contacts]').contains('SEARCH CONTACTS')
      cy.get('h2[data-cy=add-new-contact]').contains('ADD NEW CONTACT')
    })
  })
})

describe('Incident Details Page', () => {
  beforeEach('intercept the incident details request', () => {
    cy.intercept(`${baseURL}/incidents/11`, { fixture: 'incident-info-by-id.json' })
    cy.intercept(`${baseURL}/incidents?active=true`, { fixture: 'ongoing-incidents.json' })
    cy.intercept(`${baseURL}/incidents?active=false`, { fixture: 'resolved-incidents.json' })
    cy.visit(`http://localhost:3000/incident-details/11`)
  })

  it.skip('Has a Title', () => {
    cy.get('[data-cy=info-name]').contains('test 11')
  });

  it.skip('Has a Type', () => {
    cy.get('[data-cy=info-type]').contains('Flood')
  });

  it.skip('Has a Location', () => {
    cy.get('[data-cy=info-location]').contains('Located at: test 11 in test 11, AR')
  });

  it.skip('Has a Summary', () => {
    cy.get('[data-cy=info-desc]').contains('Summary: test 11 summary')
  });

  it.skip('Has a Declaration date', () => {
    cy.get('[data-cy=info-start-date]')
    //.contains('Declaration: May 22, 2021')
  });

  it.skip('Has a Procedural Protocol that relates to the type of incident', () => {
    cy.get('[data-cy=info-instructions]').first().contains('Flood Response Procedural Protocol:')
    cy.get('[data-cy=info-instructions]').last().contains(' Begin communication to obtain portable temporary electrical devices, fans, dehumidifiers, etc., needed for salvage operations.')
  });

  it.skip('Has a Map to the Site Headquarters', () => {
    cy.get('a[class=map-btn]').contains('Click to get Map')
  });


  it.skip('Can be Declared Resolved', () => {
    cy.get('button[class=end-button]').contains('Declare Incident Over')
    cy.intercept(`${baseURL}/incidents`, {
      method: 'PATCH',
      fixture: 'delete-incident.json'
    })
    cy.get('button[class=end-button]')
      .click()
    cy.get('button[class=end-button]')
  })
})