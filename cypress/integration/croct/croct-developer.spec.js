/* eslint-disable no-undef */
/// <reference types="cypress" />
import croct from '@croct/plug';

croct.plug({
    appId: '00000000-0000-0000-0000-000000000000',
    debug: true,
});

const titleDeveloper = "Become your marketing team’s hero";
const subtitleDeveloper = "Build rich user experiences that are easy for your team to evolve and maintain.";

(async (typePersona)=> {
    await croct.user.edit()
        .set('custom.persona', typePersona)//marketer, growth-hacker, developer
        .save();
})("developer");

describe("Checking home-banner is personalization to Developer:", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Checking TITLE developer", () => {
        cy.contains("strong", titleDeveloper);
    });

    it("Checking SUBTITLE developer", () => {
        cy.contains("p", subtitleDeveloper);
    });

    it("Checking button developer", () => {
        cy.contains("button", "Watch our tutorial")
    });
});