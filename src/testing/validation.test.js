/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Testing the password utilities
*/

import {expect} from 'chai';
import {hasAtLeast8Chars, hasTwoDigits, hasUpperChar} from '../index.js';

describe('verifies that string has', () => {
    it('two digits in the middle: Passes', () => {
        expect(hasTwoDigits("pa55word")).to.be.true;
    });
    it('two digits at beginning and end: Passes', () => {
        expect(hasTwoDigits("5paword5")).to.be.true;
    });
    it('two digits with no digits: Fails', () => {
        expect(hasTwoDigits("password")).to.be.false;
    });
    it('over 8 chars: Passes', () => {
        expect(hasAtLeast8Chars("12345678")).to.be.true;
    });
    it('over 8 chars: Fails', () => {
        expect(hasAtLeast8Chars("1234567")).to.be.false;
    });
    it('at least 1 special char: Passes', () => {
        expect(hasUpperChar("This should pass"))
    });
    it('at least 1 special char: Fail', () => {
        expect(hasUpperChar("this should fail"))
    });
});