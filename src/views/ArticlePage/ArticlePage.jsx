import { useAllPrismicDocumentsByType, PrismicRichText } from '@prismicio/react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { UilArrowRight } from '@iconscout/react-unicons';

import * as h from '../../helpers';
import useScrollToTop from '../../hooks/useScrollToTop';
import ArticleMeta from '../../components/ArticleLead/components/ArticleMeta';
import ArticleLead from '../../components/ArticleLead';
import PageNavigation from '../../components/PageNavigation';

import { StyledHeader, StyledBody, StyledBodyFooter } from './ArticlePage.styled';

function ArticlePage() {
    useScrollToTop();

    const [posts] = useAllPrismicDocumentsByType('post');
    const { articleUID } = useParams();
    
    if (!posts) return;

    const article = posts.find(item => item.uid === articleUID);

    if (!article) {
        return <Redirect to='/404.html' />;
    }

    const sortedPosts = h.sortPostsByDate(posts).slice(0, 3);

    const { leadText, postTitle, imgSrc, articleContent, imgAltText, metaData } = h.getArticleData(article);

    return (
        <section>
            <PageNavigation pageName='blog' />
            <StyledHeader>
                <div className=' content'>
                    <h1 className='content__title'>{postTitle}</h1>
                    <p className='content__lead'>{leadText}</p>
                </div>
                <ArticleMeta metaData={metaData} classes='content__meta' labels={true} />
                <img className='header__img' src={imgSrc} alt={imgAltText} />
            </StyledHeader>
            <StyledBody>
                <ArticleMeta metaData={metaData} classes='body__meta' labels={true} />
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
                <ul className='footer__list'>
                    {sortedPosts.map(item => (
                        <ArticleLead key={item.id} data={item} showMetaLabels={true} />
                    ))}
                </ul>
            </StyledBodyFooter>
        </section>
    );
}

export default ArticlePage;
