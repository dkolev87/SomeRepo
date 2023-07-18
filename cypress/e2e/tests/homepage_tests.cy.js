import { it, describe } from "mocha";
import { HomePage } from "../pages/homepage_accedia.cy";

const homepage = new HomePage();

describe("All tests", () => {
  
  beforeEach(function () {
    cy.visit("https://example.cypress.io/");
    homepage.dropdown();
  });

  it("Typing in textboxes", () => {
    homepage.chooseActions();
    homepage.typeEmail();
    homepage.typePass();
    homepage.enterName();
  });
  it('Waiting field', () => {
    homepage.waits();
    homepage.typeComment();
    homepage.clickGetCommentBtn();
  });
});
