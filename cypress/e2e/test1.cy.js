it("Google Search", function () {
    
  cy.visit("https://google.com");
  cy.get("#W0wltc > .QS5gu").click();
  cy.get(".SDkEP").type("Automation Step by Step{enter}");
  cy.wait(2000);
  cy.contains("Видеоклипове").click();
});
