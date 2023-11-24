import { useState, useEffect } from 'react';
import { useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import * as h from '../helpers';
import Hero from '../components/Hero';
import ArticleLead from '../components/ArticleLead';
import Pagination from '../components/Pagination';

function Home() {
    const [heroArticle, setHeroArticle] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(null);
    const [hero] = useSinglePrismicDocument('hero');
    const [posts] = useAllPrismicDocumentsByType('post');
    const [categories] = useAllPrismicDocumentsByType('category');

    useEffect(() => {
        if (!hero || !posts) return;

        const heroArticleId = hero.data.hero_article.id;
        const heroArticleData = posts.find(item => item.id === heroArticleId);
        const filteredPosts = h.sortPostsByDate(posts).filter(item => item.id !== heroArticleId);
        setHeroArticle(heroArticleData);
        setFilteredPosts(filteredPosts);
    }, [hero, posts]);

    if (!heroArticle || !filteredPosts || !categories) return;

    const categoriesArr = categories.map(item => prismicH.asText(item.data.category_name));
    const blogName = prismicH.asText(hero.data.blog_title);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} showMetaLabels={true} />);
    };

    return (
        <>
            <Hero sectionName={blogName} categoriesArr={categoriesArr} variant='dark' heroArticleData={heroArticle} />
            <section>
                <Pagination limit={6} variant='text'>
                    {renderLeads(filteredPosts)}
                </Pagination>
            </section>
        </>
    );
}

export default Home;
