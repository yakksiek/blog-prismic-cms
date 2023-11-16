import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function Categories({ categories, variant }) {
    console.log(variant);
    return (
        <StyledSection $variant={variant}>
            <h5>Categories</h5>
            <ul className='categories-list'>
                {categories.map((item, index) => (
                    <li className='categories-list__item' key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </StyledSection>
    );
}

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    variant: PropTypes.string.isRequired,
};

const StyledSection = styled.div`
    background-color: #000;
    min-height: 50px;
    color: #fff;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .categories-list {
        display: flex;
        gap: 1.2rem;

        &__item {
            border: 1px solid #fff;
            padding: 0.5rem 1rem;
            border-radius: 100vh;
        }
    }

    ${({ $variant }) =>
        $variant === 'light' &&
        css`
            background-color: #fff;
            color: #000;

            .categories-list__item {
                border-color: #000;
            }
        `}
`;

export default Categories;
