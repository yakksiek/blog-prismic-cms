import { useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import Hero from '../components/Hero';
import ArticleLead from '../components/ArticleLead';
import Pagination from '../components/Pagination';
// import HeroArticle from '../components/HeroArticle';

function Home() {
    const [hero] = useSinglePrismicDocument('hero');
    const [posts] = useAllPrismicDocumentsByType('post');
    const [categories] = useAllPrismicDocumentsByType('category');

    if (!hero || !posts || !categories) return;

    const categoriesArr = categories.map(item => prismicH.asText(item.data.category_name));
    const blogName = prismicH.asText(hero.data.blog_title);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} />);
    };

    return (
        <>
            <Hero sectionName={blogName} categoriesArr={categoriesArr} variant='dark' />
            <section>
                <ul>
                    <Pagination limit={2}>{renderLeads(posts)}</Pagination>
                </ul>
            </section>
        </>
    );
}

export default Home;
