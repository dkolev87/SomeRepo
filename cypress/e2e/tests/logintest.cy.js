import { describe } from "mocha";
import { LoginPage } from "../pages/login_page.cy";

const login_page = new LoginPage();

describe("All Login Tests", () => {

  beforeEach(function() {
    cy.visit("https://opensource-demo.orangehrmlive.com");
  });
  
  it("Login Test 1", () => {
    login_page.enterUsername();
    login_page.enterPassword();
    login_page.clickLogin();
  });

  it("Login Test 2", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    login_page.enterUsername();
    login_page.enterPassword();
    login_page.clickLogin();
    login_page.adminClick();
  });
});
