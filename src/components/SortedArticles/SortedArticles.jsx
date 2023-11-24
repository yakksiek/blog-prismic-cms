/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

import * as h from '../../helpers';
import ArticleLead from '../ArticleLead';
import Pagination from '../Pagination';

function SortedArticles({ articles }) {
    const { category } = useParams();
    const queryString = category || '';

    const filteredArticles = h.filterByCategoryUid(articles, queryString);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} variant='block' showMetaLabels={false} />);
    };

    return (
        <Pagination limit={6} variant='numbers' listVariant='column'>
            {renderLeads(filteredArticles)}
        </Pagination>
    );
}

export default SortedArticles;
