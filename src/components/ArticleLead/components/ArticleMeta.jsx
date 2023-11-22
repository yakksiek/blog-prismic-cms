import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArticleMeta({ metaData, classes, labels }) {
    const { date, duration, category } = metaData;
    const categoryName = category && category.split('-')[1];

    return (
        <StyledMetaList className={`${classes} meta`}>
            <li className='meta-item'>
                {labels && <span className='item-label'>Date:</span>}
                {date}
            </li>
            <li className='meta-item'>
                {labels && <span className='item-label'>Duration:</span>}
                {duration} Min
            </li>
            {category !== '' && (
                <Link to={`/blog?category=${categoryName}`} className='meta-item meta-category'>
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
    labels: PropTypes.bool.isRequired,
};

const StyledMetaList = styled.ul`
    align-items: center;
    display: flex;
    gap: 1rem;

    .meta-item {
        font-size: 0.9rem;
    }

    .item-label {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;
    }

    .meta-category {
        border: 1px solid black;
        border-radius: 100vh;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        margin-left: auto;
    }

    @media ${({ theme }) => theme.media.mobile} {
        gap: 1rem;

        .meta-item {
            display: flex;
            flex-direction: column;
        }
    }
`;

export default ArticleMeta;
