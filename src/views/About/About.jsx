import PageNavigation from '../../components/PageNavigation';
import { useSinglePrismicDocument } from '@prismicio/react';

import * as db from '../../db';
import * as h from '../../helpers';
import { StyledSection, StyledContainer } from './About.styled';

function About() {
    const [aboutPageData] = useSinglePrismicDocument('about');

    if (!aboutPageData) return;
    const { imgSrc, name, content, leadParagraph, socials, meta } = h.getAboutPageData(aboutPageData, db.icons);

    return (
        <StyledSection>
            <PageNavigation pageName='about' />
            <StyledContainer $variant='medium'>
                <div className='section-left'>
                    <img src={imgSrc} alt='blog author' className='about__img' />

                    <div className='socials'>
                        <h6>FOLLOW</h6>
                        <ul className='socials__links'>{socials}</ul>
                    </div>
                    <ul className='meta'>{meta}</ul>
                </div>
                <div className='section-right'>
                    <h2>{name}</h2>
                    <h6>{leadParagraph}</h6>
                    {content}
                </div>
            </StyledContainer>
        </StyledSection>
    );
}

export default About;
