import styled from 'styled-components';
import { UilTwitter, UilInstagram, UilRss } from '@iconscout/react-unicons';
import { PrismicRichText, useFirstPrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react';

// import HeroArticle from './components/HeroArticle/HeroArticle';
import Article from './components/Article';

// import londonImg from './images/articleBanner.jpg';
// import mingImg from './images/mindImg.png';

function App() {
    const [document] = useAllPrismicDocumentsByType('post');
    console.log(document);

    return (
        <>
            <StyledWrapper>
                <StyledHeader>
                    <h4>POSTMAG BLOG</h4>
                    <StyledNav>
                        <ul>
                            <li>Sections</li>
                            <li>Authors</li>
                            <li>Contact</li>
                            <li>-</li>
                            <li>
                                <UilTwitter />
                            </li>
                            <li>
                                <UilInstagram />
                            </li>
                            <li>
                                <UilRss />
                            </li>
                        </ul>
                    </StyledNav>
                </StyledHeader>
                <hr />
                <StyledH1>POSTMAG</StyledH1>
                <hr />
            </StyledWrapper>
            <StyledWrapper>
                <ul>
                    {/* <Article photoUrl={londonImg} />
                    <Article photoUrl={mingImg} /> */}
                    {document && document.map(postData => <Article key={postData.id} data={postData} />)}
                </ul>
            </StyledWrapper>
            {/* <HeroArticle /> */}
        </>
    );
}

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
`;
const StyledHeader = styled.header`
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 2rem;
    }
`;
const StyledH1 = styled.h1`
    font-family: var(--font-extra-bold);
    letter-spacing: 5px;
    font-size: clamp(4rem, 17vw, 13rem);
    text-align: center;
    /* line-height: clamp(10rem, 17vh, 12rem); */
`;

export default App;
