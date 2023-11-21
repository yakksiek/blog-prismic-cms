/* eslint-disable react/prop-types */
import styled from 'styled-components';
// import { UilTwitter, UilInstagram, UilRss } from '@iconscout/react-unicons';
// import { PrismicText, PrismicLink } from '@prismicio/react';
import { NavLink } from 'react-router-dom';

function Header({ menuDoc }) {
    if (!menuDoc) return null;

    const { blog_name, menu_items } = menuDoc.data;

    const MenuLink = ({ menuLink }) => (
        <li>
            <NavLink to={`/${menuLink.url}`}>{menuLink.url}</NavLink>
        </li>
    );

    return (
        <>
            <StyledHeader>
                <NavLink to='/'>
                    <h4 className='header__title'>{blog_name[0].text}</h4>
                </NavLink>
                <StyledNav>
                    <ul>
                        {menu_items.map(({ menu_link }) => {
                            return <MenuLink menuLink={menu_link} key={menu_link.url} />;
                        })}
                    </ul>
                </StyledNav>
            </StyledHeader>
            <hr />
        </>
    );
}

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__title {
        margin-bottom: 0;
    }
`;
const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 2rem;
    }
`;

export default Header;
