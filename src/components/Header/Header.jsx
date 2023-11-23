/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

import { StyledHeader, StyledNav } from './Header.styled';

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

export default Header;
