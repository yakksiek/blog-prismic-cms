import { useAllPrismicDocumentsByType, PrismicRichText } from '@prismicio/react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { UilArrowRight, UilArrowLeft } from '@iconscout/react-unicons';

import * as h from '../../helpers';
import useScrollToTop from '../../hooks/useScrollToTop';
import ArticleMeta from '../../components/ArticleLead/components/ArticleMeta';
import ArticleLead from '../../components/ArticleLead';
import Button from '../../components/Button';

import { StyledNav, StyledHeader, StyledBody, StyledBodyFooter } from './ArticlePage.styled';

function ArticlePage() {
    useScrollToTop();
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

export default ArticlePage;