import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledMetaList } from './ArticleMeta.styled';

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
                <li className='meta-item meta-category'>
                    <Link to={`/blog?category=${categoryName}`}>{categoryName.toUpperCase()}</Link>
                </li>
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

export default ArticleMeta;
