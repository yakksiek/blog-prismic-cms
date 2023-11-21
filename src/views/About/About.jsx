import PageNavigation from '../../components/PageNavigation';
import { useSinglePrismicDocument, PrismicRichText } from '@prismicio/react';

import * as db from '../../db';
import * as h from '../../helpers';
import { StyledSection, StyledContainer, StyledSectionLeft, StyledSectionRight } from './About.styled';

function About() {
    const [aboutPageData] = useSinglePrismicDocument('about');

    if (!aboutPageData) return;
    const { imgSrc, socials, meta, bodyContent } = h.getAboutPageData(aboutPageData, db.icons);

    const renderArticle = dataObj => {
        return Object.keys(dataObj).map(item => <PrismicRichText key={item} field={dataObj[item]} />);
    };

    const renderMetaData = data => {
        return data.map(item => {
            const { key, value } = item;
            return (
                <li className='meta__item' key={key}>
                    <span className='meta__title'>{key}</span>
                    {value}
                </li>
            );
        });
    };

    const renderSocials = data => {
        return data.map(item => {
            const { url, icon } = item;
            return (
                <li key={url} className='socials__item'>
                    <a href={url} target='_blank' rel='noreferrer'>
                        {icon}
                    </a>
                </li>
            );
        });
    };

    return (
        <StyledSection>
            <PageNavigation pageName='about' />
            <StyledContainer $variant='medium'>
                <StyledSectionLeft>
                    <img src={imgSrc} alt='blog author' className='img' />

                    <div className='socials'>
                        <h6 className='socials__text'>FOLLOW</h6>
                        <ul className='socials__links'>{renderSocials(socials)}</ul>
                    </div>
                    <ul className='meta'>{renderMetaData(meta)}</ul>
                </StyledSectionLeft>
                <StyledSectionRight className='section-right'>{renderArticle(bodyContent)}</StyledSectionRight>
            </StyledContainer>
        </StyledSection>
    );
}

export default About;
