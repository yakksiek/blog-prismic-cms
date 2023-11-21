import styled from 'styled-components';

export const StyledHeader = styled.div`
    .content {
        display: flex;
        gap: 2rem;
        margin-bottom: var(--margin-large);

        &__title {
            font-size: 3.5rem;
            flex: 2;
        }

        &__lead {
            flex: 1;
            font-size: 1.25rem;
            line-height: 2rem;
            font-family: var(--font-regular);
            padding: 1rem 0;
        }

        &__meta {
            margin-bottom: var(--margin-regular);
        }
    }

    .header__img {
        width: 100%;
        object-fit: cover;
        margin-bottom: var(--margin-large);
    }

    @media ${({ theme }) => theme.media.tablet} {
        .content {
            display: block;
            margin-bottom: var(--margin-regular);
        }
    }

    @media ${({ theme }) => theme.media.mobile} {
        .content {
            display: block;
            margin-bottom: var(--margin-regular-small);
            align-items: start;

            &__title {
                font-size: 2rem;
            }

            &__lead {
                font-size: 1.1rem;
            }

            &__meta {
                margin-bottom: var(--margin-regular);
            }
        }
    }
`;

export const StyledBody = styled.div`
    display: flex;
    align-items: start;
    gap: 3rem;
    max-width: var(--max-width-container-medium);
    margin: 0 auto;
    margin-bottom: var(--margin-large);

    .body__meta {
        flex: 1 0 auto;

        flex-direction: column;
        justify-content: start;

        .meta__item--category {
            margin: 0;
        }
    }

    .body__text-container {
        margin: 0 auto;

        p {
            line-height: 1.6rem;
            margin-bottom: 1rem;
        }
    }

    @media ${({ theme }) => theme.media.tablet}, ${({ theme }) => theme.media.mobile} {
        flex-direction: column-reverse;
        margin-bottom: 0;

        .body__meta {
            flex-direction: row;
            margin-bottom: 2rem;
            width: 100%;
            align-items: center;

            .meta__item--category {
                margin-left: auto;
            }
        }
    }
`;

export const StyledBodyFooter = styled.div`
    .footer__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: 4rem;
            margin-bottom: 0;
        }
    }

    .footer__link {
        display: flex;
        align-items: center;
        font-size: var(--font-size-button);
        font-family: var(--font-extra-bold);
        border-bottom: 1px solid transparent;
        transition: border-color 0.3s;

        &:hover {
            border-color: #000;

            svg {
                transform: translateX(5px);
                transition: transform 0.3s;
            }
        }
    }

    .newest-list li:last-child {
        border-bottom: none;
    }
`;
