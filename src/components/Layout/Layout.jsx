import styled from 'styled-components';
import PropTypes from 'prop-types';

import Footer from '../Footer';

function Layout({ children }) {
    return (
        <StyledWrapper>
            {children}
            <Footer />
        </StyledWrapper>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

const StyledWrapper = styled.div`
    max-width: 1500px;
    margin: 1rem auto;
    padding: 0 2rem;
`;

export default Layout;
