import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PrismicProvider } from '@prismicio/react';
import { client } from './provider/prismic.js';
import { Link } from 'react-router-dom';

import GlobalStyles from './styles/Global.jsx';
import Fonts from './styles/fonts';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrismicProvider client={client} internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />}>
            <Fonts />
            <GlobalStyles />
            <App />
        </PrismicProvider>
    </React.StrictMode>,
);
