import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
    ${({ $variant }) =>
        $variant === 'column' &&
        css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;

            @media ${({ theme }) => theme.media.tablet} {
                grid-template-columns: 1fr 1fr;
            }

            @media ${({ theme }) => theme.media.mobile} {
                grid-template-columns: 1fr;
            }
        `}
`;

export const StyledNav = styled.nav`
    margin-top: var(--margin-regular);
    margin-bottom: var(--margin-large);
    display: flex;
    gap: 2rem;
    justify-content: ${({ $variant }) => ($variant === 'text' ? 'space-between' : 'center')};
    align-items: center;

    .link-item {
        padding: 0.5rem 1rem;
        border-bottom: 1px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .link-item.disabled {
        visibility: hidden;
    }

    .link-item:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
    }

    .link-item--active {
        border-color: #000;
        font-family: var(--font-extra-bold);
    }

    @media ${({ theme }) => theme.media.mobile} {
        .link-item {
            padding: 0;
        }
    }
`;
