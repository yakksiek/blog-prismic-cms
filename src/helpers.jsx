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

export function sortPostsByDate(objectsArr) {
    return objectsArr.sort((a, b) => {
        if (a.data.date && b.data.date) {
            return b.data.date.localeCompare(a.data.date);
        } else if (a.data && a.data.date) {
            return -1;
        } else if (b.data && b.data.date) {
            return 1;
        } else {
            return 0;
        }
    });
}

export function generatePaginationData(currentPage, limit, length) {
    const pages = Math.ceil(length / limit);

    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage = currentPage < pages ? currentPage + 1 : pages;

    const generatePageNumbers = () => {
        const range = [];
        const rangeWithDots = [];

        for (let i = 1; i <= pages; i++) {
            if (i === 1 || i === pages || i === currentPage || (i >= currentPage - 1 && i <= currentPage + 1)) {
                range.push(i);
            }
        }

        let l = null;
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...'); //
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    const isPrevDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= pages;

    return { prevPage, nextPage, pageNumbers: generatePageNumbers(), isPrevDisabled, isNextDisabled, pages };
}

// export function generatePaginationData(currentPage, limit, length) {
//     const pages = Math.ceil(length / limit);

//     const generatePageNumbers = () => {
//         const range = [];
//         const maxPageNum = 5; // Maximum number of actual page numbers to display

//         let startRange = Math.max(2, currentPage - 2);
//         let endRange = Math.min(pages - 1, currentPage + 2);

//         if (currentPage < 4) {
//             // Current page is among the first three
//             endRange = startRange + maxPageNum - 1;
//         } else if (currentPage > pages - 3) {
//             // Current page is among the last three
//             startRange = pages - maxPageNum;
//         } else {
//             // Current page is somewhere in the middle
//             startRange = currentPage - 1;
//             endRange = currentPage + 1;
//         }

//         // Ensure the range is within the total pages and adjust if needed
//         startRange = Math.max(2, startRange);
//         endRange = Math.min(pages - 1, endRange);

//         if (startRange > 2) {
//             range.push(1, '...');
//         } else {
//             range.push(1);
//         }

//         for (let i = startRange; i <= endRange; i++) {
//             range.push(i);
//         }

//         if (endRange < pages - 1) {
//             range.push('...', pages);
//         } else {
//             range.push(pages);
//         }

//         return range;
//     };

//     return {
//         prevPage: currentPage > 1 ? currentPage - 1 : 1,
//         nextPage: currentPage < pages ? currentPage + 1 : pages,
//         pageNumbers: generatePageNumbers(),
//         isPrevDisabled: currentPage <= 1,
//         isNextDisabled: currentPage >= pages
//     };
// }

export function filterByCategoryUid(objects, uid) {
    if (uid === '') return objects;

    return objects.filter(obj => {
        if (!obj.data.category || !obj.data.category.uid) return;

        const categoryName = obj.data.category.uid.split('-')[1];

        if (categoryName === uid) {
            return obj;
        }
    });
}

export function getSearchParam(query, location) {
    const searchParams = new URLSearchParams(location);
    const param = searchParams.get(query);
    return param;
}
