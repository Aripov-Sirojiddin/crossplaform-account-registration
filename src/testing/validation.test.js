/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Testing the password utilities
*/

import { expect } from 'chai';
import {atLeast8Chars, hasTwoDigits} from '../index.js';

describe('Password Validation Functions', () => {
    it('Checks whether the string has two digits in the middle', () => {
        expect(hasTwoDigits("pa55word")).to.be.true;
    });
    it('Checks whether the string has two digits begining and end', () => {
        expect(hasTwoDigits("5paword5")).to.be.true;
    });
    it('Checks whether the string has two digits with no digits', () => {
        expect(hasTwoDigits("password")).to.be.false;
    });

    it('verifies that string contains over 8 chars: Passes', () => {
       expect(atLeast8Chars("12345678")).to.be.true;
    });
    it('verifies that string contains over 8 chars: Fails', () => {
        expect(atLeast8Chars("1234567")).to.be.false;
    });
});