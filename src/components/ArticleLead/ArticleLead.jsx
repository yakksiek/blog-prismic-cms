import * as h from '../../helpers';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ArticleMeta from './components/ArticleMeta';
import heroArticlePropTypes from '../../propTypes/articleDataPropTypes';

import { StyledArticleItem, StyledHeaderArticle, StyledImageWrapper, StyledFooter } from './ArticleLead.styled';

function ArticleLead({ data, variant, showMetaLabels }) {
    const { uid, leadText, postTitle, imgAltText, imgSrc, metaData } = h.getArticleData(data);

    return (
        <StyledArticleItem $variant={variant}>
            <StyledImageWrapper $variant={variant}>
                <img src={imgSrc} alt={imgAltText} />
            </StyledImageWrapper>

            <StyledHeaderArticle $variant={variant}>
                <Link to={`/blog/article/${uid}`}>
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

ArticleLead.defaultPropTypes = {
    variant: '',
};

ArticleLead.propTypes = {
    data: heroArticlePropTypes,
    variant: PropTypes.string,
    showMetaLabels: PropTypes.bool.isRequired,
};

export default ArticleLead;
