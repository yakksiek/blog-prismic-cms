import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useParams } from 'react-router-dom';

import Article from '../components/ArticleLead';

function ArticlePage() {
    const [posts] = useAllPrismicDocumentsByType('post');

    const { articleUID } = useParams();

    if (!posts) return;
    const articleData = posts.find(item => item.uid === articleUID);

    return (
        <div>
            <h4>ArticlePage</h4>
            <Article data={articleData} renderFullText={true} />
        </div>
    );
}

export default ArticlePage;
