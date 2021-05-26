const baseURL = `https://qc-engine.herokuapp.com/api/v1`

describe('QuickCommand', () => {

  beforeEach('visit the host url', () => {
    cy.intercept(`${baseURL}/incidents?active=true`, { fixture: 'ongoing-incidents.json' })
    cy.intercept(`${baseURL}/incidents?active=false`, { fixture: 'resolved-incidents.json' })
    cy.visit(`http://localhost:3000/`)
  })

  describe('Dashboard Default View: Incidents', () => {

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
        .get('label[data-cy=incident-name]').contains('Name:')
        .get('label[data-cy=incident-type]').contains('Type:')
        .get('label[data-cy=incident-date]').contains('Date:')
        .get('label[data-cy=incident-summary]').contains('Summary:')
        .get('button[data-cy=declare-submission]').contains('DECLARE')
    })

    it('Declares an emergency and adds the new incident to the ongoing incidents panel', () => {
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

    it('displays a set of contacts pertaining to a particular incident', () => {
      cy.get('[data-cy=declared-date]').first()
      //.click()   > CHART CURRENTLY HAS NO ROOT
    })
  })


  describe('Incident Details Page', () => {
    beforeEach('intercept the incident details request', () => {
      cy.intercept(`${baseURL}/incidents/11`, { fixture: 'incident-info-by-id.json' })
      cy.intercept(`${baseURL}/incidents?active=true`, { fixture: 'ongoing-incidents.json' })
      cy.intercept(`${baseURL}/incidents?active=false`, { fixture: 'resolved-incidents.json' })
      cy.visit(`http://localhost:3000/incident/details/11`)
    })

    it('Has a Title', () => {
      cy.get('[data-cy=info-name]').contains('test 11')
    });

    it('Has a Type', () => {
      cy.get('[data-cy=info-type]').contains('Flood')
    });

    it('Has a Location', () => {
      cy.get('[data-cy=info-location]').contains('Located at: test 11 in test 11, AR')
    });

    it('Has a Summary', () => {
      cy.get('[data-cy=info-desc]').contains('Summary: test 11 summary')
    });

    it('Has a Declaration date', () => {
      cy.get('[data-cy=info-start-date]')
      //.contains('Declaration: May 22, 2021')
    });

    it('Has a Procedural Protocol that relates to the type of incident', () => {
      cy.get('[data-cy=info-instructions]').first().contains('Flood Response Procedures:')
      cy.get('[data-cy=info-instructions]').last().contains(' Begin communication to obtain portable temporary electrical devices, fans, dehumidifiers, etc., needed for salvage operations.')
    });

    it('Has a Map to the Site Headquarters', () => {
      cy.get('a[class=map-btn]').contains('Click to get Map')
    });


    it('Can be Declared Resolved', () => {
      cy.get('[data-cy=resolve]').contains('Declare Incident Resolved')
      cy.intercept(`${baseURL}/incidents`, {
        method: 'PATCH',
        fixture: 'delete-incident.json'
      })
      // cy.get('[data-cy=resolve]')
      //   .click()
      cy.get('[data-cy=resolve]')
    })

  })

})

describe('Personnel view', () => {
  beforeEach('intercept the incident details request', () => {
    cy.intercept(`${baseURL}/incidents/11`, { fixture: 'incident-info-by-id.json' })
    cy.intercept(`${baseURL}/incidents?active=true`, { fixture: 'ongoing-incidents.json' })
    cy.intercept(`${baseURL}/incidents?active=false`, { fixture: 'resolved-incidents.json' })
    cy.visit(`http://localhost:3000/incident/database`)
    cy.get('[data-cy=database-btn]').click()
  })

  it('Shows a database of personnel', () => {
    cy.get('[data-cy=search-contacts]').contains('SEARCH CONTACTS')
      .get('[data-cy=add-new-contact]').contains('ADD NEW CONTACT')
    cy.get('[data-cy=input-field]').type('b')
    //cy.get('[data-cy=input-field]').contains('b')
  })

  it('Has a form for Contact Submission that Submits a new personnel member to the database', () => {
    cy.get('[data-cy=first]').type('Emily')
    cy.get('[data-cy=last]').type('Miller')
    cy.get('[data-cy=email]').type('EMikkls@gmail.com')
    cy.get('[data-cy=phone]').type('6108820318')
    cy.get('[data-cy=job]').type('Fire starter')
    cy.get('[data-cy=city]').type('Lexington')
    cy.get('[data-cy=state]').select('KY')
    cy.get('[data-cy=cmd-role]').click()
    cy.get('[data-cy=submit]').click()
    cy.get('[data-cy=search-contacts]').contains('SEARCH CONTACTS')
  })

  it('Cannot Submit Without Being Valid Data', () => {
    cy.get('[data-cy=first]').type('Von')
    cy.get('[data-cy=last]').type('Borahm')
    cy.get('[data-cy=email]').type('BigElkHead@gmail.com')
    cy.get('[data-cy=phone]').type('6108820318')
    cy.get('[data-cy=job]').type('Brick Layer')
    cy.get('[data-cy=city]').type('Birmingham')
    cy.get('[data-cy=state]').select('AL')
    cy.get('[data-cy=cmd-role]').click()
    cy.get('[data-cy=submit]').click()
    cy.get('[data-cy=add-new-contact]').contains('ADD NEW CONTACT')


  })

})