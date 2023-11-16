import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledSection } from './Categories.styled';

function Categories({ categories, variant }) {
    const renderCategories = categories => {
        return categories.map((item, index) => (
            <Link className='categories-list__item' to={`/blog?category=${item.toLowerCase()}`} key={index}>
                {item}
            </Link>
        ));
    };

    return (
        <StyledSection $variant={variant}>
            <h5>Categories</h5>
            <ul className='categories-list'>{renderCategories(categories)}</ul>
        </StyledSection>
    );
}

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    variant: PropTypes.string.isRequired,
};

export default Categories;
