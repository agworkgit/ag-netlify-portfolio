// import { useState } from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import './App.css';

export const ThemeContext = createContext('dark');

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import Portfolio from './pages/Portfolio/Portfolio';

export const App = () => {
    const storedTheme = localStorage.getItem('theme') || 'dark'; // Adjust the default value if needed
    const [theme, setTheme] = useState(storedTheme);

    const toggleTheme = () => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    };

    // Safari theme fix
    useEffect(() => {
        // Save theme in localStorage
        localStorage.setItem('theme', theme);

        // Apply theme to <html>
        document.documentElement.setAttribute('data-theme', theme);

        // Update Safari theme-color meta
        const themeColorMeta = document.querySelector(
            "meta[name='theme-color']"
        );
        if (themeColorMeta) {
            themeColorMeta.setAttribute(
                'content',
                theme === 'dark' ? '#272727' : '#e7e7e7'
            );
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='App' data-theme={theme}>
                <div id='safari-status-bar' />
                <Router basename='/'>
                    <Header />
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <Home />
                                    <About id='about' />
                                    <Skills id='skills' />
                                    <Services id='services' />
                                    <Qualification id='qualifications' />
                                    <Testimonials id='testimonials' />
                                    <Footer />
                                </>
                            }
                        />
                        <Route
                            path='/contact'
                            element={
                                <>
                                    <Contact id='contact' />
                                    <Footer id='footer' />
                                </>
                            }
                        />
                        <Route
                            path='/portfolio'
                            element={
                                <>
                                    <Portfolio id='portfolio' />
                                    <Footer id='footer' />
                                </>
                            }
                        />
                    </Routes>
                    <BackToTop />
                </Router>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
