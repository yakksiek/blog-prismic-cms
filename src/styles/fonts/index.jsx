import { createGlobalStyle } from 'styled-components';

import GeneralSansExtraLightWoff from './GeneralSans-Extralight.woff';
import GeneralSansExtraLightWoff2 from './GeneralSans-Extralight.woff2';

import GeneralSansMediumWoff from './GeneralSans-Medium.woff';
import GeneralSansMediumWoff2 from './GeneralSans-Medium.woff2';

import GeneralSansRegularWoff from './GeneralSans-Regular.woff';
import GeneralSansRegularWoff2 from './GeneralSans-Regular.woff2';

import GeneralSansSemiBoldWoff from './GeneralSans-Semibold.woff';
import GeneralSansSemiBoldWoff2 from './GeneralSans-Semibold.woff2';

const fontFiles = [
    {
        family: 'GeneralSansExtraLight',
        woff: GeneralSansExtraLightWoff,
        woff2: GeneralSansExtraLightWoff2,
        style: 'normal',
    },
    {
        family: 'GeneralSansMedium',
        woff: GeneralSansMediumWoff,
        woff2: GeneralSansMediumWoff2,
        style: 'normal',
    },
    {
        family: 'GeneralSansRegular',
        woff: GeneralSansRegularWoff,
        woff2: GeneralSansRegularWoff2,
        style: 'normal',
    },
    {
        family: 'GeneralSansSemiBold',
        woff: GeneralSansSemiBoldWoff,
        woff2: GeneralSansSemiBoldWoff2,
        style: 'normal',
    },
];

const createFontFace = ({ family, woff, woff2, style, weight }) => `
  @font-face {
    font-family: '${family}';
    src: url(${woff}) format('woff'),
         url(${woff2}) format('woff2');
    font-style: ${style};
    font-weight: ${weight};
  }
`;

export default createGlobalStyle`
  ${fontFiles.map(createFontFace).join('\n')}
`;
