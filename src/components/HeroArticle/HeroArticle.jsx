import styled from 'styled-components';

import mainArticleImg from '../../images/mainarticle-min.png';

function HeroArticle() {
    return (
        <StyledWrapper>
            <StyledHeroArticle>
                <StyledImageWrapper>
                    <img src={mainArticleImg} alt='main article img - eyes' />
                </StyledImageWrapper>
                <StyledHeaderArticle>
                    <h2>DON&apos;T CLOSE YOUR EYES</h2>
                    <StyledArticleContent>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto qui atque placeat nam
                            ex officia blanditiis modi voluptas culpa quae doloribus, illum odit quibusdam accusantium
                            quas reprehenderit necessitatibus sunt perspiciatis.
                        </p>
                        <StyledArticleInfo>
                            <ul className='info'>
                                <li>
                                    <span className='info-item'>Date:</span>16, March 2022
                                </li>
                                <li>
                                    <span className='info-item'>Duration:</span>5 Min
                                </li>
                            </ul>
                            <ul className='category'>
                                <li className='category-item'>LABEL</li>
                            </ul>
                        </StyledArticleInfo>
                    </StyledArticleContent>
                </StyledHeaderArticle>
            </StyledHeroArticle>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
`;

const StyledHeroArticle = styled.section`
    display: flex;
`;

const StyledHeaderArticle = styled.header`
    display: flex;
    padding: 1rem 0;
    & > * {
        flex: 1;
    }

    h2 {
        font-size: 4rem;
    }
`;

const StyledArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledArticleInfo = styled.div`
    display: flex;
    justify-content: space-between;

    .category,
    .info {
        display: flex;
        gap: 1rem;
    }

    .info-item {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;
    }

    .category-item {
        border: 1px solid black;
        border-radius: 100vh;
        padding: 0.25rem 0.5rem;
    }
`;

const StyledImageWrapper = styled.div`
    img {
        width: 100%;
        /* height: 400px; */
        object-fit: cover;
    }
`;

export default HeroArticle;
