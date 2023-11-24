import * as prismicH from '@prismicio/helpers';

export function convertDateFormat(dateStr) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

export function getAboutPageData(data, icons) {
    const { data: aboutPageData } = data;
    const { bio_image, full_name, main_content, lead, meta, socials } = aboutPageData;

    const imgSrc = prismicH.asImageSrc(bio_image);
    const metaData = meta.map(({ meta_item }) => {
        const [key, value] = meta_item.split(':');
        return { key, value };
    });

    const socialsData = socials.map(({ socials_item }) => {
        const { url } = socials_item;
        const iconName = Object.keys(icons).find(domain => url.includes(domain));
        const icon = icons[iconName];

        return { icon, url };
    });

    return {
        imgSrc,
        socials: socialsData,
        meta: metaData,
        bodyContent: { name: full_name, lead, body: main_content },
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

    const begin = limit * (currentPage - 1);
    const end = currentPage * limit;

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

    return { prevPage, nextPage, pageNumbers: generatePageNumbers(), isPrevDisabled, isNextDisabled, pages, begin, end };
}

export function filterByCategoryUid(objects, uid) {
    if (uid === '') return objects;

    return objects.filter(obj => {
        if (!obj.data || !obj.data.category.uid) return;

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
