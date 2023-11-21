import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${({ theme, $variant }) => theme.container[$variant].width};
    margin-top: var(--margin-large);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    gap: 5rem;

    @media ${({ theme }) => theme.media.tablet} {
        gap: 2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const StyledSectionLeft = styled.div`
    flex: 1;

    .img {
        width: 100%;
        border-radius: 50%;
        margin-bottom: var(--margin-small);
    }

    .socials {
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        display: flex;
        gap: 1rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 0;

        &__text {
            margin-bottom: 0;
        }

        &__links {
            display: flex;
            gap: 1rem;
        }
    }

    .meta {
        margin-top: var(--margin-regular);
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__item {
            display: flex;
            justify-content: space-between;
        }

        &__title {
            font-family: var(--font-extra-bold);
        }
    }
`;

export const StyledSectionRight = styled.div`
    flex: 2 1 100px;

    p {
        margin-bottom: 1rem;
    }

    @media ${({ theme }) => theme.media.tablet}, ${({ theme }) => theme.media.mobile} {
        h2 {
            font-size: 3rem;
        }
    }
`;
