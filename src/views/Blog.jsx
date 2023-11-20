import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useLocation } from 'react-router-dom';
import * as prismicH from '@prismicio/helpers';

import * as h from '../helpers';
import Hero from '../components/Hero';
import SortedArticles from '../components/SortedArticles/SortedArticles';

function Blog() {
    const [categories] = useAllPrismicDocumentsByType('category');
    const [posts] = useAllPrismicDocumentsByType('post');
    const location = useLocation();

    if (!categories) return;

    const categoryParam = h.getSearchParam('category', location.search);
    
    const categoriesArr = categories.map(item => prismicH.asText(item.data.category_name));

    return (
        <>
            <Hero sectionName='Blog' categoriesArr={categoriesArr} variant='light' />
            <SortedArticles articles={posts} query={categoryParam} />
        </>
    );
}

export default Blog;
