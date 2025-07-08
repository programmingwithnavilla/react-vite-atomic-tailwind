/// <reference types="cypress" />

describe("AuthTemplate", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render email and password inputs and allow typing", () => {
    cy.get("input#email")
      .should("exist")
      .type("test@example.com")
      .should("have.value", "test@example.com");

    cy.get("input#password")
      .should("exist")
      .type("password123")
      .should("have.value", "password123");
  });
});
