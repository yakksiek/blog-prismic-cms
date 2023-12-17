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
    font-size: 11rem;
    font-size: clamp(5.5rem, 17.5vw, 17rem);
    text-align: center;
    margin-bottom: 0;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 5.5rem;
        font-size: clamp(3rem, 16vw, 12rem);
    }

    @media ${({ theme }) => theme.media.mobile} {
        padding: 1rem 0;
        font-size: 3.5rem;
        font-size: 15.2vw;
    }
`;

export default SectionHeading;
