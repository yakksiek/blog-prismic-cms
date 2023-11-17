import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArticleMeta({ metaData, classes }) {
    const { date, duration, category } = metaData;
    const categoryName = category && category.split('-')[1];

    return (
        <StyledMetaList className={`${classes} meta`}>
            <li className='meta-item'>
                <span className='meta__item-name'>Date:</span>
                {date}
            </li>
            <li className='meta-item'>
                <span className='meta__item-name'>Duration:</span>
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

ArticleMeta.defaultProps = {
    classes: '',
};

ArticleMeta.propTypes = {
    metaData: PropTypes.shape({
        date: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }),
    classes: PropTypes.string,
};

const StyledMetaList = styled.ul`
    align-items: start;
    display: flex;
    gap: 2rem;

    .meta__item-name {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;
    }

    .meta__item--category {
        border: 1px solid black;
        border-radius: 100vh;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        margin-left: auto;
    }

    @media screen and (max-width: 500px) {
        .meta-item {
            display: flex;
            flex-direction: column;
        }
    }
`;

export default ArticleMeta;
