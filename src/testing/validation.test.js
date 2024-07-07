/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Testing the password utilities
*/

import { expect } from 'chai';
import { hasTwoDigits } from '../index.js';

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
});