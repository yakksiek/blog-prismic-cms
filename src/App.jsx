import { useAllPrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
    const [document] = useAllPrismicDocumentsByType('post');
    const [navigation] = useSinglePrismicDocument('navigation');

    return (
        <Router>
            <Layout>
                <Header menuDoc={navigation} />
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Layout>
        </Router>
    );
}

export default App;
