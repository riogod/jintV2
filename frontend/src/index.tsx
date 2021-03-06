import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap/config/i18n';


if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { worker } = require('./_testData/mocks/browser');
    worker.start()
}

const Loader = () => (
    <div className="App">
        <div>loading...</div>
    </div>
);

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>,
    document.getElementById('root')
);

