import React from 'react';
import { hot } from 'react-hot-loader';

import style from './app.css';

const App = () => {
    return <div className={style.app}>React starter </div>;
};

export default hot(module)(App);
