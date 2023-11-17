import { useAllPrismicDocumentsByType, PrismicRichText } from '@prismicio/react';
import { useParams, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UilArrowRight, UilArrowLeft } from '@iconscout/react-unicons';

import * as h from '../helpers';
import ArticleMeta from '../components/ArticleLead/components/ArticleMeta';
import ArticleLead from '../components/ArticleLead';
import Button from '../components/Button';

function ArticlePage() {
    const history = useHistory();
    const [posts] = useAllPrismicDocumentsByType('post');

    const { articleUID } = useParams();

    if (!posts) return;
    const sortedPosts = h.sortPostsByDate(posts).slice(0, 3);
    const article = posts.find(item => item.uid === articleUID);

    const { leadText, postTitle, imgSrc, articleContent, imgAltText, metaData } = h.getArticleData(article);

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <section>
            <StyledNav className='margin-bottom-large'>
                <Button type='button' clickHandler={handleGoBack}>
                    <UilArrowLeft /> GO BACK
                </Button>
                <Link to='/blog'>
                    <h4>BLOG</h4>
                </Link>
            </StyledNav>
            <StyledHeader>
                <div className='header__content content'>
                    <h1 className='content__title'>{postTitle}</h1>
                    <p className='content__lead'>{leadText}</p>
                </div>
                <ArticleMeta metaData={metaData} classes='content__meta' />
                <img className='header__img' src={imgSrc} alt={imgAltText} />
            </StyledHeader>
            <StyledBody>
                <ArticleMeta metaData={metaData} classes='body__meta' />
                <div className='body__text-container'>
                    <PrismicRichText field={articleContent} />
                </div>
            </StyledBody>
            <hr className='margin-bottom' />
            <StyledBodyFooter>
                <div className='footer__header'>
                    <h2>LATESTS POSTS</h2>
                    <Link to='/blog' className='footer__link'>
                        SEE ALL <UilArrowRight />
                    </Link>
                </div>
                <ul className='newest-list'>
                    {sortedPosts.map(item => (
                        <ArticleLead key={item.id} data={item} />
                    ))}
                </ul>
            </StyledBodyFooter>
        </section>
    );
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;

    button:hover svg {
        transform: translateX(-5px);
        transition: transform 0.3s;
    }
`;

const StyledHeader = styled.div`
    .content {
        display: flex;
        gap: 2rem;
        margin-bottom: var(--margin-bottom-large);

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
            margin-bottom: var(--margin-bottom);
        }
    }

    .header__img {
        width: 100%;
        object-fit: cover;
        margin-bottom: var(--margin-bottom-large);
    }

    @media ${({ theme }) => theme.media.tablet} {
        .content {
            display: block;
            margin-bottom: var(--margin-bottom);
        }
    }

    @media ${({ theme }) => theme.media.mobile} {
        .content {
            display: block;
            margin-bottom: var(--margin-bottom-small);
            align-items: start;

            &__title {
                font-size: 2rem;
            }

            &__lead {
                font-size: 1.1rem;
            }

            &__meta {
                margin-bottom: var(--margin-bottom);
            }
        }
    }
`;

const StyledBody = styled.div`
    display: flex;
    align-items: start;
    gap: 3rem;
    max-width: 55rem;
    margin: 0 auto;
    margin-bottom: var(--margin-bottom-large);

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
            font-size: 1.1rem;
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

const StyledBodyFooter = styled.div`
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

export default ArticlePage;
