export class HomePage {
  commands_dropdown = ".dropdown-toggle";
  actions = ".dropdown-menu > :nth-child(3) > a";
  email_textbox = "#email1";
  pass_textbox = "#password1";
  name_textbox = "#fullName1";
  waits_dropdown = ".dropdown-menu > :nth-child(12) > a";
  waits_comment_textbox = ":nth-child(1) > .form-control";
  get_comment_button = ".network-btn";

  dropdown() {
    cy.get(this.commands_dropdown).click();
  }

  chooseActions() {
    cy.get(this.actions).click();
  }

  typeEmail() {
    const email = "mitio@gmail.com";
    cy.get(this.email_textbox).type(email);
    cy.get(this.email_textbox).should("have.value", email);
  }

  typePass() {
    const password = "Jojo";
    cy.get(this.pass_textbox).type(password);
    cy.get(this.pass_textbox).should("have.value", password);
  }

  enterName() {
    const name = "Mitio Debeliq";
    cy.get(this.name_textbox).type(name);
    cy.get(this.name_textbox).should("have.value", name);
  }
  waits() {
    cy.get(this.waits_dropdown).should("be.visible");
    cy.get(this.waits_dropdown).click();
  }
  typeComment() {
    const comment = "Kot' do'di";
    cy.get(this.waits_comment_textbox).type(comment);
    cy.get(this.waits_comment_textbox).should("have.value", comment);
    cy.url().should("eq", "https://example.cypress.io/commands/waiting");
  }
  clickGetCommentBtn() {
    cy.get(this.get_comment_button).should("be.visible");
    cy.get(this.get_comment_button).click();
  }
}
