import { useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import Hero from '../components/Hero';
import Article from '../components/ArticleLead';
// import HeroArticle from '../components/HeroArticle';

function Home() {
    const [hero] = useSinglePrismicDocument('hero');
    const [posts] = useAllPrismicDocumentsByType('post');
    const [categories] = useAllPrismicDocumentsByType('category');

    if (!hero || !posts || !categories) return;

    const categoriesArr = categories.map(item => prismicH.asText(item.data.category_name));
    const blogName = prismicH.asText(hero.data.blog_title);

    const renderPosts = posts => {
        return posts.map(item => <Article data={item} key={item.id} />);
    };

    return (
        <>
            <Hero sectionName={blogName} categoriesArr={categoriesArr} variant='dark' />
            <section>
                <ul>{renderPosts(posts)}</ul>
            </section>
        </>
    );
}

export default Home;
