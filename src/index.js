/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Check whether the string contains 2 digits
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const hasTwoDigits = (elem) => (elem.match(/\d/g) || []).length >= 2;


export { hasTwoDigits }