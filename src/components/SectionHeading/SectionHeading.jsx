import styled from 'styled-components';
import PropTypes from 'prop-types';

function SectionHeading({ children }) {
    return <StyledH1>{children}</StyledH1>;
}

SectionHeading.propTypes = {
    children: PropTypes.node.isRequired,
};

// tutaj się za dużo dzieje
// nie wiedziałem, jak dynamicznie ustawić h1
// żeby zajmował jak najwięcej miejsca
const StyledH1 = styled.h1`
    font-family: var(--font-extra-bold);
    letter-spacing: 5px;
    font-size: 11rem;
    font-size: 17.5vw;
    text-align: center;
    margin-bottom: 0;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 5.5rem;
        font-size: 16vw;
    }

    @media ${({ theme }) => theme.media.mobile} {
        padding: 1rem 0;
        font-size: 3.5rem;
        font-size: 15.5vw;
    }
`;

export default SectionHeading;
