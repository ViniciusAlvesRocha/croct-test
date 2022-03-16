/// <reference types="cypress" />
import setPersona from '../../aux';
const titleDeveloper: string = "Become your marketing team’s hero";
const subtitleDeveloper: string = "Build rich user experiences that are easy for your team to evolve and maintain.";

setPersona("developer");

describe("Checking home-banner is personalization to Developer:", (): void => {
    beforeEach((): void => {
        cy.visit("http://localhost:3000/");
    });

    it("Checking TITLE developer", (): void => {
        cy.contains("strong", titleDeveloper);
    });

    it("Checking SUBTITLE developer", (): void => {
        cy.contains("p", subtitleDeveloper);
    });

    it("Checking button developer", ():void => {
        cy.contains("button", "Watch our tutorial")
    });
});