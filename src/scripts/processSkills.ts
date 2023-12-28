export default function processSkills(skills: any[], timelineEnabled: boolean) {
    // Filter the array to only include objects where timelineElement matches timelineEnabled
    let timelineElements = skills.filter((skill: timelineElement) => {
        if (timelineEnabled) {
            return skill.timeline_element === true;
        } else {
            return skill.timeline_element === false || skill.timeline_element === undefined;
        }
    });

    // Group the objects by category
    const array: timelineElementSorted[] = Object.values(timelineElements.reduce((result, item) => {
        (result[item.category] = result[item.category] || { name: item.category, data: [] });

        result[item.category].data.push(item);
        return result;
    }, {}));
    return array;
}