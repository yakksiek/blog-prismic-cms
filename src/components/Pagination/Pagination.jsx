/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import * as h from '../../helpers';

function PaginationPagination({ children, limit, variant = 'both' }) {
    const location = useLocation();
    const length = children.length;
    const renderNumbers = variant === 'both' || variant === 'numbers';
    const renderText = variant === 'both' || variant === 'text';

    const pageParam = h.getSearchParam('page', location.search);
    const currentPage = Number(pageParam) || 1;

    const begin = limit * (currentPage - 1);
    const end = currentPage * limit;

    const { prevPage, nextPage, pageNumbers, isPrevDisabled, isNextDisabled, pages } = h.generatePaginationData(
        currentPage,
        limit,
        length,
    );

    const paginationNumbers = pageNumbers.map((number, index) => {
        if (number === '...') {
            return (
                <li className='link-item' key={index}>
                    ...
                </li>
            );
        } else {
            const activeClass = currentPage === number ? 'link-item--active' : '';
            return (
                <li key={index} className={`${activeClass} link-item`}>
                    <Link to={`${location.pathname}?page=${number}`}>{number}</Link>
                </li>
            );
        }
    });

    if (pages === 1) {
        return <ul>{children.slice(begin, end)}</ul>;
    }

    return (
        <>
            <ul>{children.slice(begin, end)}</ul>
            <StyledNav $variant={variant}>
                {renderText && (
                    <li className={`link-item ${isPrevDisabled ? 'disabled' : ''}`}>
                        <Link to={`${location.pathname}?page=${prevPage}`}>
                            <p>Prev Page</p>
                        </Link>
                    </li>
                )}

                {renderNumbers && paginationNumbers}

                {renderText && (
                    <li className={`link-item ${isNextDisabled ? 'disabled' : ''}`}>
                        <Link to={`${location.pathname}?page=${nextPage}`}>Next Page</Link>
                    </li>
                )}
            </StyledNav>
        </>
    );
}

const StyledNav = styled.nav`
    margin-top: var(--margin-bottom-small);
    margin-bottom: var(--margin-bottom-large);
    display: flex;
    gap: 2rem;
    justify-content: ${({ $variant }) => ($variant === 'text' ? 'space-between' : 'center')};
    align-items: center;

    .link-item {
        padding: 0.5rem 1rem;
        border: 1px solid transparent;
        border-radius: 50%;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .link-item.disabled {
        visibility: hidden;
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
