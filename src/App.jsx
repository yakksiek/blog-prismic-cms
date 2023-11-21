import { useSinglePrismicDocument } from '@prismicio/react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Layout from './components/Layout';
import Header from './components/Header';
import ArticlePage from './views/ArticlePage';
import Blog from './views/Blog';

function App() {
    const [navigation] = useSinglePrismicDocument('navigation');

    return (
        <Router>
            <Layout>
                <Header menuDoc={navigation} />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/blog'>
                        <Blog />
                    </Route>
                    <Route path='/blog/:articleUID'>
                        <ArticlePage />
                    </Route>
                    {/* <Redirect to='/home' /> */}
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
