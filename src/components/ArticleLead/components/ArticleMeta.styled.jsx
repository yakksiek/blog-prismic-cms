import styled from 'styled-components';

export const StyledMetaList = styled.ul`
    align-items: center;
    display: flex;
    gap: 1rem;

    .meta-item {
        font-size: 0.9rem;
    }

    .item-label {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;
    }

    .meta-category {
        border: 1px solid black;
        border-radius: 100vh;
        padding: 0.25rem 0.5rem;
        font-size: 0.7rem;
        margin-left: auto;
    }

    @media ${({ theme }) => theme.media.tablet} {
        gap: 0.5rem;

        .meta-item {
            display: flex;
            flex-direction: column;
        }
    }

    @media ${({ theme }) => theme.media.mobile} {
        gap: 1rem;

        .meta-item {
            display: flex;
            flex-direction: column;
        }
    }
`;
