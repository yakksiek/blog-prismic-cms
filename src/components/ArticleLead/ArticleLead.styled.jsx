import styled, { css } from 'styled-components';

export const StyledArticleItem = styled.li`
    border-bottom: 0.5px solid black;
    min-height: 300px;
    padding: 2.5rem 0;
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
        'picture body'
        'picture footer';

    ${({ $variant }) =>
        $variant === 'block' &&
        css`
            border-bottom: none;
            border: 1px solid black;
            margin-top: -1px;
            margin-left: -1px;
            padding: 2.5rem;
            grid-template-columns: 1fr;
            grid-template-rows: minmax(2rem, 3rem) min-content min-content;
            grid-row-gap: 1rem;

            grid-template-areas:
                'footer'
                'picture'
                'body';
        `}

    ${({ $variant }) =>
        $variant !== 'block' &&
        css`
            @media ${({ theme }) => theme.media.tablet} {
                grid-template-columns: 1fr 2fr;
            }
        `}

    @media ${({ theme }) => theme.media.mobile} {
        padding: 1.5rem 0;
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content 2rem;
        grid-row-gap: 1rem;

        grid-template-areas:
            'picture'
            'body'
            'footer';
    }
`;

export const StyledHeaderArticle = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: body;

    p {
        line-height: 1.5rem;
        margin-bottom: var(--margin-regular);
    }

    ${({ $variant }) =>
        $variant === 'block' &&
        css`
            justify-content: flex-start;

            h4 {
                font-size: 1.5rem;
            }

            p {
                margin-bottom: 0;
            }
        `}
`;

export const StyledImageWrapper = styled.div`
    grid-area: picture;
    width: 100%;
    height: 100%;

    img {
        max-width: 220px;
        object-fit: cover;
        aspect-ratio: 1;

        @media ${({ theme }) => theme.media.tablet}, ${({ theme }) => theme.media.mobile} {
            max-width: 100%;
            height: 100%;
            margin-bottom: var(--margin-regular-small);
        }
    }

    ${({ $variant }) =>
        $variant === 'block' &&
        css`
            img {
                max-width: 100%;
                object-fit: cover;
            }
        `}
`;

export const StyledFooter = styled.div`
    grid-area: footer;
    margin-top: auto;
`;
