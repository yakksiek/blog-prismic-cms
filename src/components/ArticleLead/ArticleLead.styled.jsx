import styled from 'styled-components';

export const StyledArticleItem = styled.li`
    border-bottom: 0.5px solid black;
    min-height: 300px;
    padding: 2.5rem 0;
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media screen and (max-width: 600px) {
        display: block;
    }
`;

export const StyledHeaderArticle = styled.header`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header__title {
        margin-bottom: var(--margin-regular);
    }

    .article__lead {
        line-height: 1.5rem;
        margin-bottom: var(--margin-regular);
    }
`;

export const StyledImageWrapper = styled.div`
    flex: 1;

    .article__img {
        max-width: 220px;
        object-fit: cover;
        aspect-ratio: 1;

        @media screen and (max-width: 600px) {
            max-width: 100%;
            margin-bottom: var(--margin-regular-small);
        }
    }
`;
