import { useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import Hero from '../components/Hero';
import ArticleLead from '../components/ArticleLead';
import Pagination from '../components/Pagination';

function Home() {
    const [hero] = useSinglePrismicDocument('hero');
    const [posts] = useAllPrismicDocumentsByType('post');
    const [categories] = useAllPrismicDocumentsByType('category');

    if (!hero || !posts || !categories) return;

    const categoriesArr = categories.map(item => prismicH.asText(item.data.category_name));
    const blogName = prismicH.asText(hero.data.blog_title);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} showMetaLabels={true} />);
    };

    return (
        <>
            <Hero sectionName={blogName} categoriesArr={categoriesArr} variant='dark' />
            <section>
                <Pagination limit={6} variant='text'>
                    {renderLeads(posts)}
                </Pagination>
            </section>
        </>
    );
}

export default Home;
