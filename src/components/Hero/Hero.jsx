import PropTypes from 'prop-types';

import SectionHeading from '../SectionHeading';
import Categories from '../Categories';

function Hero({ sectionName, categoriesArr, variant = 'light' }) {
    return (
        <div>
            <SectionHeading>{sectionName.toUpperCase()}</SectionHeading>
            <Categories categories={categoriesArr} variant={variant} />
        </div>
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

export default Hero;
