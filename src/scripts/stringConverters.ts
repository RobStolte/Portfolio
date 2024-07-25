function toSentenceCase(str: string, capitalizeFirst: boolean = true) {
    let result = str;

    const caseStyle =
        (/_/.test(str)) ? 'snake' :
        (/-/.test(str)) ? 'kebab' :
        (/[A-Z]/.test(str)) ? 'camel' :
        'undefined';

    switch (caseStyle) {
        case 'snake':
            result = result.replace(/_/g, ' ');
            break;
        case 'kebab':
            result = result.replace(/-/g, ' ');
            break;
        case 'camel':
            result = result.replace(/([A-Z])/g, ' $1');
            break;
    }
    result = result.trim().toLowerCase();
    result = (capitalizeFirst) ? CapitalizeFirst(result) : result;
    return result;
}

function CapitalizeFirst(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export {toSentenceCase, CapitalizeFirst};
