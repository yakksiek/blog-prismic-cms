import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, menuDoc }) {
    return (
        <StyledWrapper>
            {children}
            <Footer />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
`;

export default Layout;
