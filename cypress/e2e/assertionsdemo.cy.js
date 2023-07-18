import { assert } from "chai";

it("Assertions Demo", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("get").click();
  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn")
    .and("be.visible")
    .and("be.enabled");

  assert.equal(4, "4", "It is equal..., but not exactly");
  assert.strictEqual(4, "4", "Not equal");
});
