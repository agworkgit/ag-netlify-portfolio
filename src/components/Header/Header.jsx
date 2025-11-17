import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../App';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ReactSwitch from 'react-switch';
import './header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { toggleTheme, theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);
    const handleMenuClose = () => setMenuOpen(false);

    // Close menu when route changes
    useEffect(() => {
        handleMenuClose();
    }, [location]);

    // Lock/unlock scroll when menu opens
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('body-lock');
        } else {
            document.body.classList.remove('body-lock');
        }
    }, [isMenuOpen]);

    return (
        <header className='header'>
            <nav className='nav container'>
                <Link to='/' className='nav-logo'>
                    AG
                </Link>

                {/* Hamburger */}
                <div className='nav-toggle' onClick={handleMenuToggle}>
                    <i className='bi bi-list'></i>
                </div>

                {/* Theme toggle */}
                <div className='switch-theme'>
                    <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        onColor='#ff7028'
                        offColor='#3a3ae3'
                        onHandleColor='#272727'
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>

                {/* Overlay */}
                <div
                    className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={handleMenuClose}
                ></div>

                {/* Fullscreen Menu */}
                <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    {/* Close button inside menu */}
                    <button
                        className='nav-menu-close'
                        onClick={handleMenuClose}
                        aria-label='Close menu'
                    >
                        <i className='bi bi-x'></i>
                    </button>

                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-link'
                                onClick={handleMenuClose}
                            >
                                Home
                            </Link>
                        </li>
                        {location.pathname !== '/portfolio' &&
                            location.pathname !== '/contact' && (
                                <>
                                    <li className='nav-item'>
                                        <ScrollLink
                                            to='about'
                                            className='nav-link'
                                            smooth
                                            duration={200}
                                            onClick={handleMenuClose}
                                        >
                                            About
                                        </ScrollLink>
                                    </li>
                                    <li className='nav-item'>
                                        <ScrollLink
                                            to='skills'
                                            className='nav-link'
                                            smooth
                                            duration={200}
                                            onClick={handleMenuClose}
                                        >
                                            Skills
                                        </ScrollLink>
                                    </li>
                                    <li className='nav-item'>
                                        <ScrollLink
                                            to='services'
                                            className='nav-link'
                                            smooth
                                            duration={200}
                                            onClick={handleMenuClose}
                                        >
                                            Services
                                        </ScrollLink>
                                    </li>
                                </>
                            )}
                        <li className='nav-item'>
                            <Link
                                to='/portfolio'
                                className='nav-link'
                                onClick={handleMenuClose}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className='nav-link'
                                onClick={handleMenuClose}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
