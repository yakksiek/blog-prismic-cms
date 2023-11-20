/* eslint-disable react/prop-types */
import * as h from '../../helpers';

import ArticleLead from '../ArticleLead';
import Pagination from '../Pagination';

function SortedArticles({ articles, query }) {
    const queryString = query || '';

    const filteredArticles = h.filterByCategoryUid(articles, queryString);

    const renderLeads = posts => {
        return posts.map(item => <ArticleLead data={item} key={item.id} />);
    };

    return (
        <ul>
            <Pagination limit={4} variant='numbers'>
                {renderLeads(filteredArticles)}
            </Pagination>
        </ul>
    );
}

export default SortedArticles;
