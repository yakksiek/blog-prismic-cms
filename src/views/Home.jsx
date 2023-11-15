import styled from 'styled-components';

import Layout from '../components/Layout';

function Home() {
    return (
        <>
            <hr />
            <StyledH1>POSTMAG</StyledH1>
            <hr />
        </>
    );
}

const StyledH1 = styled.h1`
    font-family: var(--font-extra-bold);
    letter-spacing: 5px;
    font-size: clamp(4rem, 17vw, 13rem);
    text-align: center;
    /* line-height: clamp(10rem, 17vh, 12rem); */
`;

export default Home;
