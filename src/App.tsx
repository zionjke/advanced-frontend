import React, {Suspense} from 'react';
import './index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPage} from "./pages/About/About.lazy";
import {MainPage} from "./pages/Main/Main.lazy";


const App = () => {
    return (
        <div className="app">
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
