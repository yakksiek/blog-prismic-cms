import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { Switch } from 'react-router-dom';
import * as prismicH from '@prismicio/helpers';
import { Route } from 'react-router-dom';

import Hero from '../components/Hero';
import SortedArticles from '../components/SortedArticles/SortedArticles';
import ArticlePage from './ArticlePage';

function Blog() {
    const [categories] = useAllPrismicDocumentsByType('category');
    const [posts] = useAllPrismicDocumentsByType('post');

    if (!categories || !posts) return;
    const categoriesArr = categories.map(item => prismicH.asText(item.data.category_name));

    return (
        <>
            <Hero sectionName='Blog' categoriesArr={categoriesArr} variant='light' />
            <Switch>
                <Route exact path='/blog'>
                    <SortedArticles articles={posts} />
                </Route>
                <Route path='/blog/category/:category'>
                    <SortedArticles articles={posts} />
                </Route>
                <Route path='/blog/article/:articleUID'>
                    <ArticlePage />
                </Route>
            </Switch>
        </>
    );
}

export default Blog;
