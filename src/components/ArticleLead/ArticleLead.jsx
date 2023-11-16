/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';
import * as h from '../../helpers';
import * as prismicH from '@prismicio/helpers';
import { Link } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';

function ArticleLead({ data, renderFullText }) {
    const { data: objData, uid } = data;
    const { date, article_lead, photo, title, article_content } = objData;

    const leadText = prismicH.asText(article_lead);
    const postTitle = prismicH.asText(title);
    const postImg = prismicH.asImageSrc(photo);
    const formattedDate = h.convertDateFormat(date);
    const estimatedTime = h.estimateReadingTime(article_content);

    return (
        <StyledArticleItem>
            <StyledWrapper $renderFullText={renderFullText}>
                <StyledHeaderArticle $renderFullText={renderFullText}>
                    <Link to={`/blog/${uid}`}>
                        <h4>{postTitle}</h4>
                    </Link>
                    <StyledHeaderBottom>
                        <p>{leadText}</p>
                        {/* <PrismicRichText field={article_content} /> */}

                        <StyledArticleMetaInfo className='info'>
                            <li>
                                <span className='info__item'>Date:</span>
                                {formattedDate}
                            </li>
                            <li>
                                <span className='info__item'>Duration:</span>
                                {estimatedTime} Min
                            </li>
                            <li className='info__item info__item--category'>TRAVEL</li>
                        </StyledArticleMetaInfo>
                    </StyledHeaderBottom>
                </StyledHeaderArticle>
                <StyledImageWrapper>
                    <img src={postImg} alt={photo.alt} />
                </StyledImageWrapper>
            </StyledWrapper>
        </StyledArticleItem>
    );
}

const StyledArticleItem = styled.li`
    border-bottom: 0.5px solid black;
    height: 320px;
    padding: 2.5rem 0;
    list-style: none;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    height: 100%;
`;

const StyledHeaderArticle = styled.header`
    flex: 4;
    height: 100%;
    display: grid;
    grid-template-rows: auto;

    & > * {
        flex: 1;
    }

    h2 {
        font-size: 4rem;
    }

    p {
        line-height: 1.5rem;
    }
`;

const StyledHeaderBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const StyledArticleMetaInfo = styled.div`
    display: flex;
    gap: 2rem;

    .info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .info__item {
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

const StyledImageWrapper = styled.div`
    flex: 1;
    height: 100%;

    img {
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1;
    }
`;

export default ArticleLead;
