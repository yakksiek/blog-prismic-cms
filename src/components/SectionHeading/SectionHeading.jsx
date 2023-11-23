import styled from 'styled-components';
import PropTypes from 'prop-types';

function SectionHeading({ children }) {
    return <StyledH1>{children}</StyledH1>;
}

SectionHeading.propTypes = {
    children: PropTypes.node.isRequired,
};

const StyledH1 = styled.h1`
    font-family: var(--font-extra-bold);
    letter-spacing: 5px;
    font-size: clamp(2rem, 15vw, 13rem);
    text-align: center;
    margin-bottom: 0;

    @media ${({ theme }) => theme.media.mobile} {
        padding: 1rem 0;
    }
`;

export default SectionHeading;
