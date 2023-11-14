/* eslint-disable react/prop-types */
import styled from 'styled-components';

function Article({ data }) {
    const { data: objData } = data;
    console.log(objData);

    return (
        <StyledArticleItem>
            <StyledWrapper>
                <StyledImageWrapper>
                    <img src='' alt='london streets' />
                </StyledImageWrapper>
                <StyledHeaderArticle>
                    <h4>Bustling London Streets</h4>
                    <p>
                        In Blackstock Road you can travel and taste the world, from Africa to the Middle East and Asia,
                        before finally landing in Europe. The choice is infinite, global and unpretentious.
                    </p>
                    <StyledArticleInfo>
                        <ul className='info'>
                            <li>
                                <span className='info-item'>Date:</span>16, March 2023
                            </li>
                            <li>
                                <span className='info-item'>Duration:</span>10 Min
                            </li>
                        </ul>
                        <ul className='category'>
                            <li className='category-item'>TRAVEL</li>
                        </ul>
                    </StyledArticleInfo>
                </StyledHeaderArticle>
            </StyledWrapper>
        </StyledArticleItem>
    );
}

const StyledArticleItem = styled.li`
    border-bottom: 0.5px solid black;
    /* border-top: 0.5px solid black; */
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

const StyledArticleInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .category,
    .info {
        display: flex;
        gap: 1rem;
    }

    .info-item {
        font-family: var(--font-extra-bold);
        margin-right: 0.25rem;
    }

    .category-item {
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
