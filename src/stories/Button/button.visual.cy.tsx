import React from 'react'
import { Button } from '.'

describe('Test Button component', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button label='button' />)
    cy.get('.sc-hfDuwB').should('contain', 'button');
  })

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button label='button' />)
    cy.get('.sc-hfDuwB').should('contain', 'button');
  })

  it('check if the css style for the button size is small', () => {
    cy.mount(<Button label='button' size='small' />);
    cy.get('.sc-hfDuwB')
      .should('have.css', 'font-size', '12px')
      .should('have.css', 'padding', '10px 16px')
  })

  it('check if the css style for the button size is medium', () => {
    cy.mount(<Button label='button' size='medium' />);
    cy.get('.sc-hfDuwB')
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'padding', '11px 20px')
  })

  it('check if the css style for the button size is large', () => {
    cy.mount(<Button label='button' size='large' />);
    cy.get('.sc-hfDuwB')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'padding', '12px 24px')
  })

  it('change the background color for the button to be purple => (rgb(128, 0, 128))', () => {
    cy.mount(<Button label='button' backgroundColor='purple' />);
    cy.get('.sc-hfDuwB')
      .should('have.css', 'background-color', 'rgb(128, 0, 128)');
  });

  it('check the background color of primary button => (rgb(128, 0, 128))', () => {
    cy.mount(<Button label='button' primary={true} />);
    cy.get('.sc-hfDuwB')
      .should('have.css', 'background-color', 'rgb(30, 167, 253)')
      .should('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it('check the background color of not primary button => (rgb(128, 0, 128))', () => {
    cy.mount(<Button label='button' primary={false} />);
    cy.get('.sc-hfDuwB')
      .should('have.css', 'background-color', 'rgb(211, 211, 211)')
      .should('have.css', 'color', 'rgb(51, 51, 51)');
  });
})