import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar and search bb king", () => {
  cy.get("[id=search_form_homepage]").type("bb king");
  cy.get("[id=search_button_homepage]").click();
  cy.url().should('eq','https://duckduckgo.com/?q=bb+king&t=h_&ia=web')
});