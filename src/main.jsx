import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PrismicProvider } from '@prismicio/react';
import { client } from './provider/prismic.js';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme.jsx';
import GlobalStyles from './styles/Global.jsx';
import Fonts from './styles/fonts';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrismicProvider client={client} internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}>
            <ThemeProvider theme={theme}>
                <Fonts />
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </PrismicProvider>
    </React.StrictMode>,
);
