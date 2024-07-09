/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Testing the password utilities
*/

import {expect} from 'chai';
import {hasAtLeast8Chars, hasTwoDigits, hasSpecialChar, hasUpperChar, validatePassword} from '../passwordValidation.js';

describe('verifies that string', () => {
    it('has two digits in the middle: Passes', () => {
        expect(hasTwoDigits("pa55word")).to.be.true;
    });
    it('has two digits at beginning and end: Passes', () => {
        expect(hasTwoDigits("5paword5")).to.be.true;
    });
    it('has two digits with no digits: Fails', () => {
        expect(hasTwoDigits("password")).to.be.false;
    });
    it('has over 8 chars: Passes', () => {
        expect(hasAtLeast8Chars("12345678")).to.be.true;
    });
    it('has over 8 chars: Fails', () => {
        expect(hasAtLeast8Chars("1234567")).to.be.false;
    });
    it('has at least 1 UpperCase char: Passes', () => {
        expect(hasUpperChar("This should pass")).to.be.true;
    });
    it('has at least 1 UpperCase char: Fail', () => {
        expect(hasUpperChar("this should fail")).to.be.false;
    });
    it('has at least 1 special char with 2 $: Passes', () => {
        expect(hasSpecialChar("thi$$should pass")).to.be.true;
    });
    it('has at least 1 special char with 1 $: Passes', () => {
        expect(hasSpecialChar("thi$should pass")).to.be.true;
    });
    it('has at least 1 special char with #: Passes', () => {
        expect(hasSpecialChar("thi#should pass")).to.be.true;
    });
    it('has at least 1 special char: Fail', () => {
        expect(hasSpecialChar("this should fail")).to.be.false;
    });
});
describe("Checks passwords if", () => {
    it('is missing an upper char', () => {
        expect(validatePassword("some n1c3 pa$$word")).to.be.false;
    })
    it('is missing a special char', () => {
        expect(validatePassword("somE n1c3 password")).to.be.false;
    })
    it('is missing 2 numbers', () => {
        expect(validatePassword("somE nice pa$sword")).to.be.false;
    })
    it('is shorter than 8 chars', () => {
        expect(validatePassword("Pa$5w0r")).to.be.false;
    })
    it('is a valid password', () => {
        expect(validatePassword("This Pa$5w0rD 1$ N1C3")).to.be.true;
    })
})