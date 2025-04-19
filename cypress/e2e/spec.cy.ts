describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should select category Houses and Apartments correctly', () => {
    // Check initial state (Houses selected)
    cy.get('[data-testid="category-slider"]').should(
      'have.class',
      'translate-x-[6px]'
    );
    cy.get('[data-testid="houses-category"]').should(
      'have.class',
      'text-accent-100'
    );
    cy.get('[data-testid="apartments-category"]').should(
      'have.class',
      'text-base-600'
    );

    // Click to switch to Apartments
    cy.get('[data-testid="category-toggle"]').click();

    // Check Apartments is selected
    cy.get('[data-testid="category-slider"]').should(
      'have.class',
      'translate-x-[142px]'
    );
    cy.get('[data-testid="apartments-category"]').should(
      'have.class',
      'text-accent-100'
    );
    cy.get('[data-testid="houses-category"]').should(
      'have.class',
      'text-base-600'
    );

    // Click to switch back to Houses
    cy.get('[data-testid="category-toggle"]').click();

    // Check Houses is selected again
    cy.get('[data-testid="category-slider"]').should(
      'have.class',
      'translate-x-[6px]'
    );
    cy.get('[data-testid="houses-category"]').should(
      'have.class',
      'text-accent-100'
    );
    cy.get('[data-testid="apartments-category"]').should(
      'have.class',
      'text-base-600'
    );
  });

  it('Should change testimonials when clicking on different authors', () => {
    // Get initial testimonial text and author
    cy.get('[data-testid="testimonial-text"]').then(($initialTestimonial) => {
      const initialText = $initialTestimonial.text();

      cy.get('[data-testid="testimonial-author"]').then(($author) => {
        const initialAuthor = $author.text();

        // Click on second testimonial
        cy.get('[data-testid="testimonial-1"]').click();

        // Verify testimonial text and author changed
        cy.get('[data-testid="testimonial-text"]').should(
          'not.have.text',
          initialText
        );
        cy.get('[data-testid="testimonial-author"]').should(
          'not.have.text',
          initialAuthor
        );

        // Click on third testimonial
        cy.get('[data-testid="testimonial-2"]').click();

        // Verify testimonial text and author changed again
        cy.get('[data-testid="testimonial-text"]').should(
          'not.have.text',
          initialText
        );
        cy.get('[data-testid="testimonial-author"]').should(
          'not.have.text',
          initialAuthor
        );
      });
    });
  });
});
