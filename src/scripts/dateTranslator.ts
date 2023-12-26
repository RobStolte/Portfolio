export function dateTranslator(date : number) {
    if (date === undefined) {
        return null;
    } else if (date === null) {
        return "huidig"
    }
    const dateString = date.toString();
    const year = dateString.slice(0,4);
    const month = dateString.slice(4,6);
    const day = dateString.slice(6,8);

    const newDate = new Date(`${year}-${month}-${day}`).toLocaleDateString('nl-NL');
    return newDate;
}