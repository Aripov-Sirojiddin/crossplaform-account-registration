/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Check whether the string contains 2 digits
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const hasTwoDigits = (elem) => (elem.match(/\d/g) || []).length >= 2;
export { hasTwoDigits }

/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Check whether the string contains at least 8 chars
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const atLeast8Chars = (elem) => elem.length >= 8;
export { atLeast8Chars }
