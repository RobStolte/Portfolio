/**
 * Converts a string to sentence case.
 *
 * @param {string} str - The string to convert.
 * @param {boolean} [capitalizeFirst=true] - Determines whether the first letter should be capitalized or not. Default is true.
 * @returns {string} - The converted string in sentence case.
 */
const toSentenceCase = (str: string, capitalizeFirst: boolean = true) => {
    let result = str;

    // Detect the case style by the whole string
    if (/_/.test(str)) {
        // snake_case: Replace underscores with spaces
        result = result.replace(/_/g, ' ');
    } else if (/-/.test(str)) {
        // kebab-case: Replace hyphens with spaces
        result = result.replace(/-/g, ' ');
    } else if (/[A-Z]/.test(str)) {
        // camelCase or PascalCase: Insert a space before all capital letters
        result = result.replace(/([A-Z])/g, ' $1');
    }
    // Trim leading and trailing spaces
    result = result.trim();

    // Make all other letters lower case
    result = result.toLowerCase();
    // Capitalize the first letter if capitalizeFirst is true
    if (capitalizeFirst) {
        result = CapitalizeFirst(result)
    }
    return result;
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string to capitalize the first letter.
 * @returns {string} The capitalized string.
 */
const CapitalizeFirst = (str: string) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export { toSentenceCase, CapitalizeFirst };
