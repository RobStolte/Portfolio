export function processSkills(skills) {
    // Filter the array to only include objects where timelineObject is true
    const timelineElements:timelineElement[] = skills.filter((skill: { timelineElement: timelineElement; }) => skill.timelineElement);
    // Group the objects by category
    const timelineArray = Object.values(timelineElements.reduce((result, item) => {
        (result[item.category] = result[item.category] || { name: item.category, data: [] });
        result[item.category].data.push(item);
        return result;
    }, {}));
    return timelineArray;
}
