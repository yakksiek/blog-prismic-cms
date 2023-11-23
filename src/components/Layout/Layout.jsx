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
    margin: 0 auto;
    padding: 2rem;

    @media ${({ theme }) => theme.media.mobile} {
        padding: 1.5rem;
    }
`;

export default Layout;
