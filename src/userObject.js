import {validatePassword} from "./passwordValidation.js";

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Creates user if password is valid
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
export function User(email, username, password, bio) {
    if (!validatePassword(password)) { return }
    this.email = email;
    this.username = username;
    this.password = password;
    this.bio = bio;
}
