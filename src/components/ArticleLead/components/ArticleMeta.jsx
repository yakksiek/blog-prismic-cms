/* eslint-disable react/prop-types */
import styled from 'styled-components';

function ArticleMeta({ formattedDate, estimatedTime, category }) {
    const categoryName = category && category.split('-')[1].toUpperCase();

    return (
        <StyledMetaList className='meta'>
            <li>
                <span className='meta__item'>Date:</span>
                {formattedDate}
            </li>
            <li>
                <span className='meta__item'>Duration:</span>
                {estimatedTime} Min
            </li>
            {category !== '' && <li className='meta__item meta__item--category'>{categoryName}</li>}
        </StyledMetaList>
    );
}

const StyledMetaList = styled.ul`
    align-items: center;
    display: flex;
    gap: 2rem;

    .meta__item {
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

export default ArticleMeta;
