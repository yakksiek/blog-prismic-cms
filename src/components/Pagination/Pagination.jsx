import { Link, useLocation, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as h from '../../helpers';
import { StyledNav, StyledList } from './Pagination.styled';

function Pagination({ children, limit, variant = 'both', listVariant }) {
    const location = useLocation();
    const length = children.length;
    const { pathname } = location;
    const renderNumbers = variant === 'both' || variant === 'numbers';
    const renderText = variant === 'both' || variant === 'text';

    const pageParam = h.getSearchParam('page', location.search);
    const currentPage = Number(pageParam) || 1;

    const { prevPage, nextPage, pageNumbers, isPrevDisabled, isNextDisabled, pages, begin, end } =
        h.generatePaginationData(currentPage, limit, length);

    const isCurrPageOutOfRange = currentPage > pages;
    if (isCurrPageOutOfRange) {
        return <Redirect to={pathname + '?page=1'} />;
    }

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
                <Link to={`${pathname}?page=${number}`}>{number}</Link>
            </li>
        );
    });

    if (pages === 1) {
        return <StyledList $variant={listVariant}>{children.slice(begin, end)}</StyledList>;
    }

    return (
        <>
            <StyledList $variant={listVariant}>{children.slice(begin, end)}</StyledList>
            <StyledNav $variant={variant}>
                {renderText && (
                    <li className={`link-item ${isPrevDisabled ? 'disabled' : ''}`}>
                        <Link to={`${pathname}?page=${prevPage}`}>
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
    listVariant: '',
};

Pagination.propTypes = {
    children: PropTypes.node.isRequired,
    limit: PropTypes.number.isRequired,
    variant: PropTypes.string,
    listVariant: PropTypes.string,
};

export default Pagination;
