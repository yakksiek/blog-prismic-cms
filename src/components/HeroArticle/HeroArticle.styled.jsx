import styled from 'styled-components';

export const StyledHeroArticle = styled.section`
    display: flex;
    flex-direction: column-reverse;
    margin: 3rem 0;

    @media ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
    }
`;

export const StyledHeaderArticle = styled.header`
    display: flex;
    gap: 3rem;
    padding: 1rem 0;
    margin-bottom: var(--margin-regular);

    & > * {
        flex: 1;
    }

    h2 {
        font-size: 4rem;
        font-size: clamp(4rem, 7.5vw, 6.5rem);
        margin-bottom: 0;
    }

    @media ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
        margin-bottom: 0;
        gap: 2rem;
    }
`;

export const StyledArticleContent = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${({ theme }) => theme.media.tablet}, ${({ theme }) => theme.media.mobile} {
        h6 {
            font-size: 1rem;
            font-family: var(--font-regular);
        }
    }
`;

export const StyledImageWrapper = styled.div`
    img {
        width: 100%;
        object-fit: cover;
    }
`;
