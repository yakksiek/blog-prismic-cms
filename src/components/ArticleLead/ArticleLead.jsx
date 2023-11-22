/* eslint-disable react/prop-types */
import * as h from '../../helpers';
import { Link } from 'react-router-dom';

import ArticleMeta from './components/ArticleMeta';
import { StyledArticleItem, StyledHeaderArticle, StyledImageWrapper, StyledFooter } from './ArticleLead.styled';

function ArticleLead({ data, variant, showMetaLabels }) {
    const { uid, leadText, postTitle, imgAltText, imgSrc, metaData } = h.getArticleData(data);

    return (
        <StyledArticleItem $variant={variant}>
            <StyledImageWrapper $variant={variant}>
                <img src={imgSrc} alt={imgAltText} />
            </StyledImageWrapper>

            <StyledHeaderArticle $variant={variant}>
                <Link to={`/blog/${uid}`}>
                    <h4>{postTitle}</h4>
                </Link>
                <p>{leadText}</p>
            </StyledHeaderArticle>
            <StyledFooter>
                <ArticleMeta metaData={metaData} labels={showMetaLabels} />
            </StyledFooter>
        </StyledArticleItem>
    );
}

export default ArticleLead;
