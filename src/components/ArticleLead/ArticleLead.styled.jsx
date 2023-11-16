import styled, { css } from 'styled-components';

export const StyledArticleItem = styled.li`
    border-bottom: 0.5px solid black;
    height: 300px;
    padding: 2.5rem 0;
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
`;

export const StyledHeaderArticle = styled.header`
    flex: 4;
    height: 100%;
    display: grid;
    grid-template-rows: auto;

    .article-lead {
        line-height: 1.5rem;
    }
`;

export const StyledHeaderBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .info {
        align-items: center;
        display: flex;
        gap: 2rem;
    }

    .info__item {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;

        &--category {
            border: 1px solid black;
            border-radius: 100vh;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            margin-left: auto;
        }
    }
`;

export const StyledImageWrapper = styled.div`
    flex: 1;
    height: 100%;

    .article-img {
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1;
    }
`;
