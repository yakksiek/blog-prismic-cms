import styled from 'styled-components';
import { useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import Categories from '../components/Categories';
import Article from '../components/ArticleLead';
import HeroArticle from '../components/HeroArticle';

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
            <hr />
            <StyledH1>{blogName.toUpperCase()}</StyledH1>
            <Categories categories={categoriesArr} />
            <section>
                <ul>{renderPosts(posts)}</ul>
            </section>
        </>
    );
}

const StyledH1 = styled.h1`
    font-family: var(--font-extra-bold);
    letter-spacing: 5px;
    font-size: clamp(4rem, 17vw, 13rem);
    text-align: center;
`;

export default Home;
