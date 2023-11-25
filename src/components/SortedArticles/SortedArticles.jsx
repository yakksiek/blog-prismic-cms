import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as h from '../../helpers';
import ArticleLead from '../ArticleLead';
import Pagination from '../Pagination';
import useScrollToTop from '../../hooks/useScrollToTop';
import articleDataPropTypes from '../../propTypes/articleDataPropTypes';

function SortedArticles({ articles }) {
    useScrollToTop();
    const { category } = useParams();
    const queryString = category || '';

    const filteredArticles = h.filterByCategoryUid(articles, queryString);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} variant='block' showMetaLabels={false} />);
    };

    return (
        <Pagination limit={1} variant='numbers' listVariant='column'>
            {renderLeads(filteredArticles)}
        </Pagination>
    );
}

SortedArticles.propTypes = {
    articles: PropTypes.arrayOf(articleDataPropTypes).isRequired,
};

export default SortedArticles;
