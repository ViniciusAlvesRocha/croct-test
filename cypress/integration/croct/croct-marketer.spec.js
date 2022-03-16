/* eslint-disable no-undef */
/// <reference types="cypress" />
import croct from '@croct/plug';

croct.plug({
    appId: '00000000-0000-0000-0000-000000000000',
    debug: true,
});

const titleMarketer = "Get more out of your marketing investment";
const subtitleMarketer = "Optimize your digital customer experience to drive more sales and happier customers.";

(async (typePersona)=> {
    await croct.user.edit()
        .set('custom.persona', typePersona)//marketer, growth-hacker, developer
        .save();

})("marketer")

describe("Checking home-banner is personalization to marketer:", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Checking TITLE marketer", () => {
        cy.contains("strong", titleMarketer);
    });

    it("Checking SUBTITLE marketer", () => {
        cy.contains("p", subtitleMarketer);
    });

    it("Checking button marketer", () => {
        cy.contains("button", "Book a demo")
    });
});
