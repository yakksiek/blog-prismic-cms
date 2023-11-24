import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionHeading from '../SectionHeading';
import Categories from '../Categories';

function Hero({ sectionName, categoriesArr, variant = 'light' }) {
    return (
        <StyledHero>
            <SectionHeading>{sectionName.toUpperCase()}</SectionHeading>
            <Categories categories={categoriesArr} variant={variant} />
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
};

const StyledHero = styled.div`
    padding: 1rem 0;
`;

export default Hero;
