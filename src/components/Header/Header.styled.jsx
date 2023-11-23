import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__title {
        margin-bottom: 0;
    }
`;
export const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 2rem;
    }
`;