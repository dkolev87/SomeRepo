export class LoginPage {
  username_textbox =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  password_textbox =
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  login_btn = ".oxd-button";
  username = "Admin"; // Set default username
  password = "admin123"; // Set default password
  admin_click = "body";

  enterUsername() {
    cy.get(this.username_textbox).type(this.username);
  }

  enterPassword() {
    cy.get(this.password_textbox).type(this.password);
  }

  clickLogin() {
    cy.get(this.login_btn).click();
  }
  
  adminClick() {
    cy.get(this.admin_click).click();
  }
}
