import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as h from '../../helpers';
import ArticleLead from '../ArticleLead';
import Pagination from '../Pagination';
import useScrollToTop from '../../hooks/useScrollToTop';
import Hero from '../Hero';
import articleDataPropTypes from '../../propTypes/articleDataPropTypes';

function SortedArticles({ articles, categories }) {
    useScrollToTop();
    const { category } = useParams();
    const queryString = category || '';

    const filteredArticles = h.filterByCategoryUid(articles, queryString);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} variant='block' showMetaLabels={false} />);
    };

    return (
        <>
            <Hero sectionName='Blog' categoriesArr={categories} variant='light' />
            <Pagination limit={6} variant='numbers' listVariant='column'>
                {renderLeads(filteredArticles)}
            </Pagination>
        </>
    );
}

SortedArticles.propTypes = {
    articles: PropTypes.arrayOf(articleDataPropTypes).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortedArticles;
