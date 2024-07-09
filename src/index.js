/*Created on 07/06/2024 By Sirojiddin Aripov
    @description Check whether the string contains 2 digits
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const hasTwoDigits = (elem) => (elem.match(/\d/g) || []).length >= 2;
export {hasTwoDigits}

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Check whether the string contains at least 8 chars
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const hasAtLeast8Chars = (elem) => elem.length >= 8;
export {hasAtLeast8Chars}

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Contains 1 upper character
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const hasUpperChar = (elem) => (elem.match(/[A-Z]/) || []).length >= 1;
export {hasUpperChar}

/*Created on 07/08/2024 By Sirojiddin Aripov
    @description Contains 1 speical character
    @param elem [String]
    @updates N/A
    @returns [Boolean]
*/
const hasTwoSpecialChars = (elem) => (elem.match(/!@#\$%\^&\*\(\)_-=+\[]\\\{}\.,\?`~/) || []).length >= 1;
export {hasTwoSpecialChars}