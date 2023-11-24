import PropTypes from 'prop-types';
import styled from 'styled-components';

import heroArticlePropTypes from '../../propTypes/articleDataPropTypes';
import SectionHeading from '../SectionHeading';
import Categories from '../Categories';
import HeroArticle from '../HeroArticle';

function Hero({ sectionName, categoriesArr, variant, heroArticleData }) {
    return (
        <StyledHero>
            <SectionHeading>{sectionName.toUpperCase()}</SectionHeading>
            <Categories categories={categoriesArr} variant={variant} />
            {heroArticleData && <HeroArticle articleData={heroArticleData} />}
        </StyledHero>
    );
}

Hero.defaultPropTypes = {
    variant: 'light',
};

Hero.propTypes = {
    sectionName: PropTypes.string.isRequired,
    variant: PropTypes.string,
    categoriesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
    heroArticleData: heroArticlePropTypes,
};

const StyledHero = styled.div`
    padding: 1rem 0;
`;

export default Hero;
