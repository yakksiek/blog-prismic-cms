/* eslint-disable react/prop-types */
import * as h from '../../helpers';
import { Link } from 'react-router-dom';

import ArticleMeta from './components/ArticleMeta';
import { StyledArticleItem, StyledHeaderArticle, StyledHeaderBottom, StyledImageWrapper } from './ArticleLead.styled';

function ArticleLead({ data }) {
    const { uid, leadText, postTitle, imgAltText, imgSrc, metaData } = h.getArticleData(data);

    return (
        <StyledArticleItem>
            <StyledImageWrapper>
                <img className='article__img' src={imgSrc} alt={imgAltText} />
            </StyledImageWrapper>
            <StyledHeaderArticle>
                <Link to={`/blog/${uid}`}>
                    <h4>{postTitle}</h4>
                </Link>
                <p className='article__lead'>{leadText}</p>
                <StyledHeaderBottom>
                    <ArticleMeta metaData={metaData} />
                </StyledHeaderBottom>
            </StyledHeaderArticle>
        </StyledArticleItem>
    );
}

export default ArticleLead;
