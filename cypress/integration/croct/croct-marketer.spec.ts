/// <reference types="cypress" />
import setPersona from '../../aux';
const titleMarketer: string = "Get more out of your marketing investment";
const subtitleMarketer: string = "Optimize your digital customer experience to drive more sales and happier customers.";

setPersona("marketer");

describe("Checking home-banner is personalization to marketer:", (): void => {
    beforeEach((): void => {
        cy.visit("http://localhost:3000/");
    });

    it("Checking TITLE marketer", (): void => {
        cy.contains("strong", titleMarketer);
    });

    it("Checking SUBTITLE marketer", (): void => {
        cy.contains("p", subtitleMarketer);
    });

    it("Checking button marketer", ():void => {
        cy.contains("button", "Book a demo")
    });
});
