/* eslint-disable react/prop-types */
import * as h from '../../helpers';
import * as prismicH from '@prismicio/helpers';
import { Link } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';

import ArticleMeta from './components/ArticleMeta';
import { StyledArticleItem, StyledHeaderArticle, StyledHeaderBottom, StyledImageWrapper } from './ArticleLead.styled';

function ArticleLead({ data }) {
    // console.log(data);
    const { uid, leadText, postTitle, imgAltText, imgSrc, formattedDate, estimatedTime, categoryName } =
        h.getArticleData(data);

    return (
        <StyledArticleItem>
            <StyledHeaderArticle>
                <Link to={`/blog/${uid}`}>
                    <h4>{postTitle}</h4>
                </Link>
                <StyledHeaderBottom>
                    <p className='article-lead'>{leadText}</p>

                    <ArticleMeta formattedDate={formattedDate} estimatedTime={estimatedTime} category={categoryName} />
                </StyledHeaderBottom>
            </StyledHeaderArticle>
            <StyledImageWrapper>
                <img className='article-img' src={imgSrc} alt={imgAltText} />
            </StyledImageWrapper>
        </StyledArticleItem>
    );
}

export default ArticleLead;
