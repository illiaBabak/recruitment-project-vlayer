describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should select category Houses and Apartments correctly', () => {
    // Check initial state (Houses selected)
    cy.get('[data-testid="houses-category"]').should('have.class', 'active');

    // Click to switch to Apartments
    cy.get('[data-testid="category-toggle"]').click();

    // Check Apartments is selected
    cy.get('[data-testid="apartments-category"]').should(
      'have.class',
      'active'
    );

    // Click to switch back to Houses
    cy.get('[data-testid="category-toggle"]').click();

    // Check Houses is selected again
    cy.get('[data-testid="houses-category"]').should('have.class', 'active');
  });

  it('Should change testimonials when clicking on different authors', () => {
    // Get initial testimonial text and author
    cy.get('[data-testid="testimonial-text"]').then(($initialTestimonial) => {
      const initialText = $initialTestimonial.text();

      cy.get('[data-testid="testimonial-author"]').then(($author) => {
        const initialAuthor = $author.text();

        // Click on second testimonial
        cy.get('[data-testid="testimonial-1"]').click();

        cy.get('[data-testid="testimonial-text"]')
          .should('not.have.text', initialText)
          .should('not.be.empty');

        cy.get('[data-testid="testimonial-author"]')
          .should('not.have.text', initialAuthor)
          .should('not.be.empty');

        cy.get('[data-testid="testimonial-0"]').click();

        // Verify testimonial text and author changed again
        cy.get('[data-testid="testimonial-text"]').should(
          'have.text',
          initialText
        );

        cy.get('[data-testid="testimonial-author"]').should(
          'have.text',
          initialAuthor
        );
      });
    });
  });
});
