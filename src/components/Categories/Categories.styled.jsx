import styled, { css } from 'styled-components';

export const StyledSection = styled.div`
    background-color: #000;
    min-height: 50px;
    color: #fff;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .categories__label {
        margin-bottom: 0;
    }

    .list {
        display: flex;
        gap: 1.2rem;

        &__item {
            color: inherit;
            border: 1px solid #fff;
            padding: 0.5rem 1rem;
            border-radius: 100vh;
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
`;
