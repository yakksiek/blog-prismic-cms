/* eslint-disable react/prop-types */
import * as h from '../../helpers';
import * as prismicH from '@prismicio/helpers';
import { Link } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';

import {
    StyledArticleItem,
    StyledHeaderArticle,
    StyledHeaderBottom,
    StyledImageWrapper,
} from './ArticleLead.styled';

function ArticleLead({ data }) {
    const { data: objData, uid } = data;
    const { date, article_lead, photo, title, article_content } = objData;

    const leadText = prismicH.asText(article_lead);
    const postTitle = prismicH.asText(title);
    const postImg = prismicH.asImageSrc(photo);
    const formattedDate = h.convertDateFormat(date);
    const estimatedTime = h.estimateReadingTime(article_content);

    return (
        <StyledArticleItem>

                <StyledHeaderArticle>
                    <Link to={`/blog/${uid}`}>
                        <h4>{postTitle}</h4>
                    </Link>
                    <StyledHeaderBottom>
                        <p className='article-lead'>{leadText}</p>

                        <div className='info'>
                            <li>
                                <span className='info__item'>Date:</span>
                                {formattedDate}
                            </li>
                            <li>
                                <span className='info__item'>Duration:</span>
                                {estimatedTime} Min
                            </li>
                            <li className='info__item info__item--category'>TRAVEL</li>
                        </div>
                    </StyledHeaderBottom>
                </StyledHeaderArticle>
                <StyledImageWrapper>
                    <img className="article-img" src={postImg} alt={photo.alt} />
                </StyledImageWrapper>
        </StyledArticleItem>
    );
}

export default ArticleLead;
