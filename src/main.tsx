import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { RouterProvider } from '@tanstack/react-router';

import { router } from './app';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
    undefined /* [snowpack] import.meta.hot */
        .accept();
}
