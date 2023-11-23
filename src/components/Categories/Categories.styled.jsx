import styled, { css } from 'styled-components';

export const StyledSection = styled.div`
    background-color: #000;
    min-height: 60px;
    color: #fff;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6 {
        margin-bottom: 0;
    }

    .list {
        display: flex;
        gap: 1.2rem;

        &__item {
            color: inherit;
            font-size: 0.75rem;
            border: 1px solid #fff;
            padding: 0.4rem 1rem;
            border-radius: 100vh;

            &:hover {
                transform: scale(1.1);
                transition: transform 0.3s;
            }
        }
    }

    ${({ $variant }) =>
        $variant === 'light' &&
        css`
            background-color: #fff;
            color: #000;

            .list__item {
                border-color: #000;
                color: inherit;
            }
        `}

    @media ${({ theme }) => theme.media.mobile} {
        display: block;
        h6 {
            margin-bottom: var(--margin-small);
        }
    }
`;
