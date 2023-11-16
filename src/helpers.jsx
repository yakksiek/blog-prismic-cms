import * as prismicH from '@prismicio/helpers';

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

export function getArticleData(data) {
    const { data: objData, uid } = data;
    const { date, article_lead, photo, title, article_content, category } = objData;

    const leadText = prismicH.asText(article_lead);
    const postTitle = prismicH.asText(title);
    const imgSrc = prismicH.asImageSrc(photo);
    const formattedDate = convertDateFormat(date);
    const estimatedTime = estimateReadingTime(article_content);
    const imgAltText = photo.alt;
    const categoryName = category.uid ? category.uid : '';

    const metaData = {
        date: formattedDate,
        duration: estimatedTime,
        category: categoryName,
    };

    return {
        uid,
        leadText,
        postTitle,
        imgSrc,
        articleContent: article_content,
        imgAltText,
        metaData,
    };
}
