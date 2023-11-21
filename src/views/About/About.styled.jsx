import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${({ theme, $variant }) => theme.container[$variant].width};
    margin-top: var(--margin-large);
    display: grid;
    grid-column-gap: 5rem;
    grid-template-rows: auto;
    grid-template-columns: 300px 1fr;
    grid-auto-columns: 1fr;
    margin-left: auto;
    margin-right: auto;

    .section-left {
        .about__img {
            width: 100%;
            border-radius: 50%;
            margin-bottom: var(--margin-small);
        }

        .socials {
            border-bottom: 1px solid black;
            border-top: 1px solid black;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem;

            h6 {
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
    }
`;
