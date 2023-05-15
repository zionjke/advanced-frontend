import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';

import {useTheme} from 'app/providers/ThemeProvider';
import {AboutPage} from "pages/AboutPage";
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            {/* Suspense используется для асинхронной подгрзузки компонентов */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
