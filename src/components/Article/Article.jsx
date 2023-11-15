/* eslint-disable react/prop-types */
import styled from 'styled-components';
import * as h from '../../helpers';
import * as prismicH from '@prismicio/helpers';
import { Link } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';

function Article({ data }) {
    const { data: objData, uid } = data;
    const { date, article_lead, photo, title, article_content } = objData;

    const leadText = prismicH.asText(article_lead);
    const postTitle = prismicH.asText(title);
    const postImg = prismicH.asImageSrc(photo);
    const formattedDate = h.convertDateFormat(date);
    const estimatedTime = h.estimateReadingTime(article_content);

    return (
        <StyledArticleItem>
            <StyledWrapper>
                <StyledImageWrapper>
                    <img src={postImg} alt={photo.alt} />
                </StyledImageWrapper>
                <StyledHeaderArticle>
                    <Link to={`/blog/${uid}`}>
                        <h4>{postTitle}</h4>
                    </Link>
                    <p>{leadText}</p>
                    {/* <PrismicRichText field={article_content} /> */}
                    <StyledArticleMetaInfo>
                        <ul className='info'>
                            <li>
                                <span className='info__item'>Date:</span>
                                {formattedDate}
                            </li>
                            <li>
                                <span className='info__item'>Duration:</span>
                                {estimatedTime} Min
                            </li>
                        </ul>
                        <ul className='category'>
                            <li className='category__item'>TRAVEL</li>
                        </ul>
                    </StyledArticleMetaInfo>
                </StyledHeaderArticle>
            </StyledWrapper>
        </StyledArticleItem>
    );
}

const StyledArticleItem = styled.li`
    border-bottom: 0.5px solid black;
    height: 250px;
    padding: 2.5rem 0;
    width: 70%;
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 100%;
`;

const StyledHeaderArticle = styled.header`
    flex: 4;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

const StyledArticleMetaInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .category,
    .info {
        display: flex;
        gap: 1rem;
    }

    .info__item {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;
    }

    .category__item {
        border: 1px solid black;
        border-radius: 100vh;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
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

export default Article;
