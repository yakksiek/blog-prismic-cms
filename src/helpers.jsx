export function convertDateFormat(dateStr) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const dateObj = new Date(dateStr);

    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day}, ${month} ${year}`;
}

export function estimateReadingTime(paragraphsArr) {
    const text = paragraphsArr.map(text => text.text).join(',');
    const wordsPerMinute = 200;
    const words = text.split(/\s+/);
    const wordCount = words.length;
    const readingTimeMinutes = wordCount / wordsPerMinute;

    return Math.ceil(readingTimeMinutes);
}
