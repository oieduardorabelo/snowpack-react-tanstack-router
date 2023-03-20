import * as React from 'react';

import { Outlet, Link, Router, Route, RootRoute } from '@tanstack/react-router';

const App = () => {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <hr />
            <Outlet />
        </>
    );
};
const AppRoute = new RootRoute({
    component: App,
});

function Home() {
    return (
        <div>
            <h3>Welcome Home!</h3>
        </div>
    );
}
const HomeRoute = new Route({
    getParentRoute: () => AppRoute,
    path: '/',
    component: Home,
});

function About() {
    return <div>Hello from About!</div>;
}
const AboutRoute = new Route({
    getParentRoute: () => AppRoute,
    path: '/about',
    component: About,
});

const routeTree = AppRoute.addChildren([HomeRoute, AboutRoute]);

const router = new Router({ routeTree });

export { router };
