import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { worker } = require('./_testData/mocks/browser');
         worker.start()
    }

    ReactDOM.render(<App />, document.getElementById('root'))

