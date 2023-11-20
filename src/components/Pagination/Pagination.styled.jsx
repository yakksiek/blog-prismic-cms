import styled from 'styled-components';

export const StyledNav = styled.nav`
    margin-top: var(--margin-bottom-small);
    margin-bottom: var(--margin-bottom-large);
    display: flex;
    gap: 2rem;
    justify-content: ${({ $variant }) => ($variant === 'text' ? 'space-between' : 'center')};
    align-items: center;

    .link-item {
        padding: 0.5rem 1rem;
        border: 1px solid transparent;
        border-radius: 50%;
        aspect-ratio: 1;
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
`;
