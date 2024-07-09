/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Check whether the string contains 2 digits
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
export const hasTwoDigits = (elem) => (elem.match(/\d/g) || []).length >= 2;

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Check whether the string contains at least 8 chars
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
export const hasAtLeast8Chars = (elem) => elem.length >= 8;

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Contains 1 upper character
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
export const hasUpperChar = (elem) => (elem.match(/[A-Z]/) || []).length >= 1;

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Contains 1 speical character
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
export const hasSpecialChar = (elem) => (elem.match(/[!@#\$%\^&\*\(\)_\-=+\[\]\\\{}\.,\?`~]/) || []).length >= 1;

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description runs the string through series of tests to verify it's a valid password
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
export const validatePassword = (password) => hasTwoDigits(password) && hasSpecialChar(password) && hasAtLeast8Chars(password) && hasUpperChar(password);

