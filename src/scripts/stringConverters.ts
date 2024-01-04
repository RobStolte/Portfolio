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

    // Capitalize the first letter if capitalizeFirst is true
    if (capitalizeFirst) {
        result = CapitalizeFirst(result)
    }

    // Make all other letters lower case
    result = result.toLowerCase();

    // Trim leading and trailing spaces
    result = result.trim();

    return result;
}

const CapitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export { toSentenceCase, CapitalizeFirst };
