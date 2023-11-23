import { useSinglePrismicDocument } from '@prismicio/react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetData } from 'react-helmet-async';
import * as prismicH from '@prismicio/helpers';

import Home from './views/Home';
import About from './views/About';
import Layout from './components/Layout';
import Header from './components/Header';
import ArticlePage from './views/ArticlePage';
import Blog from './views/Blog';

const helmetData = new HelmetData({});

function App() {
    const [navigation] = useSinglePrismicDocument('navigation');
    const [hero] = useSinglePrismicDocument('hero');

    if (!hero) return;
    const blogName = prismicH.asText(hero.data.blog_title);

    return (
        <Router>
            <Helmet helmetData={helmetData}>
                <title>{blogName.toUpperCase()}</title>
            </Helmet>
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
