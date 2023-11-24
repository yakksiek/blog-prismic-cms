import { Link } from 'react-router-dom';

import * as h from '../../helpers';
import heroArticlePropTypes from '../../propTypes/articleDataPropTypes';
import ArticleMeta from '../ArticleLead/components/ArticleMeta';

import { StyledHeroArticle, StyledImageWrapper, StyledHeaderArticle, StyledArticleContent } from './HeroArticle.styled';

function HeroArticle({ articleData }) {
    const { uid, leadText, postTitle, imgAltText, imgSrc, metaData } = h.getArticleData(articleData);

    return (
        <StyledHeroArticle>
            <StyledImageWrapper>
                <img src={imgSrc} alt={imgAltText} />
            </StyledImageWrapper>
            <StyledHeaderArticle>
                <Link to={`/blog/article/${uid}`}>
                    <h2>{postTitle}</h2>
                </Link>
                <StyledArticleContent>
                    <h6>{leadText}</h6>
                    <ArticleMeta metaData={metaData} labels={true} />
                </StyledArticleContent>
            </StyledHeaderArticle>
        </StyledHeroArticle>
    );
}

HeroArticle.propTypes = {
    articleData: heroArticlePropTypes,
};

export default HeroArticle;
