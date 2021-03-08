import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap/config/i18n';
import { StoresProvider, stores } from "./store";
import createRouter from "./bootstrap/initRouter";
import {RouterProvider} from "react-router5";
import {initBootstrap} from "./bootstrap";


if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { worker } = require('./_testData/mocks/browser');
    worker.start()
}

const router = createRouter();

initBootstrap().then( () => {
    stores.app.setLoading(false);
});

router.start(() => {ReactDOM.render(
    <StoresProvider value={stores}>
        <RouterProvider router={router}>
            <Suspense fallback={<div>Загрузка...</div>}>
                <App />
            </Suspense>
        </RouterProvider>
    </StoresProvider>,
    document.getElementById('root')
)}
)

