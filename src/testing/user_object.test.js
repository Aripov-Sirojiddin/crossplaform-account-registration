/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Testing instantiation of user object
*/

import {expect} from 'chai';
import {User} from '../userObject.js';

describe("User object creation", () => {
    it("Creates a user if the password is valid", () =>{
        const psswrd = "C00l Pa$$W0rd m8";
        const user = new User("e", "u", psswrd);
        expect(user.email).to.equal("e");
        expect(user.username).to.equal("u");
        expect(user.password).to.equal(psswrd);
        expect(user.bio).to.equal(undefined);
    })
    it("Stops user creation if password is invalid", () =>{
        const psswrd = "not good password";
        const user = new User("e", "u", psswrd);
        expect(user.email).to.equal(undefined);
        expect(user.username).to.equal(undefined);
        expect(user.password).to.equal(undefined);
        expect(user.bio).to.equal(undefined);
    })
})
