import styled from 'styled-components';
import { useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import Categories from '../components/Categories';
import Article from '../components/Article';
import HeroArticle from '../components/HeroArticle';

function Home() {
    const [hero] = useSinglePrismicDocument('hero');
    const [posts] = useAllPrismicDocumentsByType('post');

    if (!hero || !posts) return;

    const blogName = prismicH.asText(hero.data.blog_title);

    const renderPosts = posts => {
        return posts.map(item => <Article data={item} key={item.id} />);
    };

    return (
        <>
            <hr />
            <StyledH1>{blogName.toUpperCase()}</StyledH1>
            <Categories categories={['lifestyle', 'books', 'reviews']} />
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
