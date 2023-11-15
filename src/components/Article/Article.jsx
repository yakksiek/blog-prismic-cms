/* eslint-disable react/prop-types */
import styled from 'styled-components';
import * as h from '../../helpers';
import * as prismicH from '@prismicio/helpers';

function Article({ data }) {
    console.log(data);
    const { data: objData } = data;
    const { date, paragraph, photo, title } = objData;

    const paragraphText = prismicH.asText(paragraph);
    const postTitle = prismicH.asText(title);
    const postImg = prismicH.asImageSrc(photo);
    const formattedDate = h.convertDateFormat(date);

    return (
        <StyledArticleItem>
            <StyledWrapper>
                <StyledImageWrapper>
                    <img src={postImg} alt={photo.alt} />
                </StyledImageWrapper>
                <StyledHeaderArticle>
                    <h4>{postTitle}</h4>
                    <p>{paragraphText}</p>
                    <StyledArticleMetaInfo>
                        <ul className='info'>
                            <li>
                                <span className='info__item'>Date:</span>
                                {formattedDate}
                            </li>
                            <li>
                                <span className='info__item'>Duration:</span>10 Min
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
