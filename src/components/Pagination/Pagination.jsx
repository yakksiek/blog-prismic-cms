/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import * as h from '../../helpers';

function PaginationPagination({ children, limit }) {
    const location = useLocation();
    const length = children.length;

    const getSearchParams = searchString => {
        return new URLSearchParams(searchString);
    };

    const searchParams = getSearchParams(location.search);
    const currentPage = Number(searchParams.get('page')) || 1;

    const begin = limit * (currentPage - 1);
    const end = currentPage * limit;

    const { pageNumbers } = h.generatePaginationData(currentPage, limit, length);

    console.log(pageNumbers);
    const paginationNumbers = pageNumbers.map((number, index) => {
        if (number === '...') {
            return <li key={index}>...</li>;
        } else {
            const activeClass = currentPage === number ? 'link-item--active' : '';
            return (
                <li key={index} className={`${activeClass} link-item`}>
                    <Link to={`${location.pathname}?page=${number}`}>{number}</Link>
                </li>
            );
        }
    });

    return (
        <>
            <ul>{children.slice(begin, end)}</ul>
            <StyledNav>
                {/* {currentPage > 1 && (
                    <li className='link-item'>
                        <Link to={`${location.pathname}?page=${prevPage}`}>
                            <p>Prev Page</p>
                        </Link>
                    </li>
                )} */}
                {paginationNumbers}
                {/* {currentPage < pages && (
                    <li className='link-item'>
                        <Link to={`${location.pathname}?page=${nextPage}`}>Next Page</Link>
                    </li>
                )} */}
            </StyledNav>
        </>
    );
}

const StyledNav = styled.nav`
    margin-top: var(--margin-bottom-small);
    margin-bottom: var(--margin-bottom-large);
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    .link-item {
        padding: 0.5rem 1rem;
        border: 1px solid transparent;
        border-radius: 50%;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
    }

    .link-item:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
    }

    .link-item--active {
        border-color: #000;
        font-family: var(--font-extra-bold);
    }
`;

export default PaginationPagination;
