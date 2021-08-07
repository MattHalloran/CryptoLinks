import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Links,
    Page,
} from './pages';
import { Sitemap } from './Sitemap';

const LINKS = {
    Home: "/"
}

function Routes() {

    const title = (page) => `${page}`;

    return (
        <Switch>
            <Route
                path="/sitemap"
                component={Sitemap}
            />
            <Route
                exact
                path={LINKS.Home}
                sitemapIndex={true}
                priority={1.0}
                changefreq="monthly"
                render={() => (
                    <Page title={title('Links')}>
                        <Links />
                    </Page>
                )}
            />
        </Switch>
    );
}

export { Routes };