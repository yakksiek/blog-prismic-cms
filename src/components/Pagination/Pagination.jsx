import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as h from '../../helpers';
import { StyledNav } from './Pagination.styled';

function Pagination({ children, limit, variant = 'both' }) {
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
        }

        const activeClass = currentPage === number ? 'link-item--active' : '';
        return (
            <li key={index} className={`${activeClass} link-item`}>
                <Link to={`${location.pathname}?page=${number}`}>{number}</Link>
            </li>
        );
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

Pagination.defaultPropTypes = {
    variant: 'both',
};

Pagination.propTypes = {
    children: PropTypes.node.isRequired,
    limit: PropTypes.number.isRequired,
    variant: PropTypes.string,
};

export default Pagination;
