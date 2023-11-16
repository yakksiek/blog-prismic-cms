import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArticleMeta({ metaData }) {
    const { date, duration, category } = metaData;
    const categoryName = category && category.split('-')[1];

    return (
        <StyledMetaList className='meta'>
            <li>
                <span className='meta__item'>Date:</span>
                {date}
            </li>
            <li>
                <span className='meta__item'>Duration:</span>
                {duration} Min
            </li>
            {category !== '' && (
                <Link to={`/blog?category=${categoryName}`} className='meta__item meta__item--category'>
                    {categoryName.toUpperCase()}
                </Link>
            )}
        </StyledMetaList>
    );
}

ArticleMeta.propTypes = {
    metaData: PropTypes.shape({
        date: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }),
};

const StyledMetaList = styled.ul`
    align-items: center;
    display: flex;
    gap: 2rem;

    .meta__item {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;

        &--category {
            border: 1px solid black;
            border-radius: 100vh;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            margin-left: auto;
        }
    }
`;

export default ArticleMeta;
