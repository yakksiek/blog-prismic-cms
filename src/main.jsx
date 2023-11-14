import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import GlobalStyles from './styles/Global.jsx';
import Fonts from './styles/fonts';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Fonts />
        <GlobalStyles />
        <App />
    </React.StrictMode>,
);
