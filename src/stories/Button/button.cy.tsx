import { Button } from "./index";

describe('Button', () => {
    it('should call the onClick function', () => {
        cy.mount(<Button label='button' onClick={cy.stub().as('click')}></Button>)
        cy.get('Button').click()
        cy.get('@click').should('have.been.calledOnce');
        cy.get('Button').click()
        cy.get('@click').should('have.been.calledTwice');

    });
});