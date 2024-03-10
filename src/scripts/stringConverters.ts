/**
 * Converts a string to sentence case.
 *
 * @param {string} str - The string to convert.
 * @param {boolean} [capitalizeFirst=true] - Determines whether the first letter should be capitalized or not. Default is true.
 * @returns {string} - The converted string in sentence case.
 */
function toSentenceCase (str: string, capitalizeFirst: boolean = true) {
    let result = str;
    
    const caseStyle = 
        (/_/.test(str))     ? 'snake' : 
        (/-/.test(str))     ? 'kebab' : 
        (/[A-Z]/.test(str)) ? 'camel' : 
                              'undefined';

    switch (caseStyle) {
        case 'snake': result = result.replace(/_/g, ' '); break;
        case 'kebab': result = result.replace(/-/g, ' '); break;
        case 'camel': result = result.replace(/([A-Z])/g, ' $1'); break;
    }
    result = result.trim().toLowerCase();
    (capitalizeFirst) ? CapitalizeFirst(result) : result;
    return result;
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string to capitalize the first letter.
 * @returns {string} The capitalized string.
 */
function CapitalizeFirst (str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export { toSentenceCase, CapitalizeFirst };
