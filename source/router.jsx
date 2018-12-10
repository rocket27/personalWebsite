import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import IndexPage from './modules/home/indexPage';
import Page404 from './modules/notFound/notFound';
import AboutPage from './modules/about/about';
import OwnProjects from './modules/ownProjects/ownProjects';
import ProductionProjects from './modules/productionProjects/productionProjects';

export const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/own-projects" component={OwnProjects} />
                <Route
                    path="/production-projects"
                    component={ProductionProjects}
                />
                <Route component={Page404} />
            </Switch>
        </HashRouter>
    );
};
