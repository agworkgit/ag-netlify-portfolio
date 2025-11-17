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

    const handleMenuToggle = () => {
        setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (
            location.pathname !== '/portfolio' &&
            location.pathname !== '/contact'
        ) {
            // Additional logic you want to perform when not on portfolio or contact
        }
    }, [location]);

    return (
        <header className='header'>
            <nav className='nav container'>
                <Link to='/' className='nav-logo'>
                    AG
                </Link>

                <div className={isMenuOpen ? 'nav-menu show-menu' : 'nav-menu'}>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-link'
                                onClick={() => {
                                    handleMenuClose();
                                }}
                            >
                                <i className='bi bi-house nav-icon'></i> Home
                            </Link>
                        </li>

                        {navigate && (
                            <>
                                {location.pathname !== '/portfolio' &&
                                    location.pathname !== '/contact' && (
                                        <>
                                            <li className='nav-item'>
                                                <ScrollLink
                                                    to='about'
                                                    className='nav-link'
                                                    smooth='true'
                                                    duration={200}
                                                    onClick={() => {
                                                        handleMenuClose();
                                                    }}
                                                >
                                                    <i className='bi bi-person-circle nav-icon'></i>{' '}
                                                    About
                                                </ScrollLink>
                                            </li>

                                            <li className='nav-item'>
                                                <ScrollLink
                                                    to='skills'
                                                    className='nav-link'
                                                    smooth='true'
                                                    duration={200}
                                                    onClick={() => {
                                                        handleMenuClose();
                                                    }}
                                                >
                                                    <i className='bi bi-tools nav-icon'></i>{' '}
                                                    Skills
                                                </ScrollLink>
                                            </li>

                                            <li className='nav-item'>
                                                <ScrollLink
                                                    to='services'
                                                    className='nav-link'
                                                    smooth='true'
                                                    duration={200}
                                                    onClick={() => {
                                                        handleMenuClose();
                                                    }}
                                                >
                                                    <i className='bi bi-briefcase nav-icon'></i>{' '}
                                                    Services
                                                </ScrollLink>
                                            </li>
                                        </>
                                    )}
                            </>
                        )}

                        <li className='nav-item'>
                            <Link
                                to='/portfolio'
                                className='nav-link'
                                onClick={() => {
                                    handleMenuClose();
                                }}
                            >
                                <i className='bi bi-file-earmark-code nav-icon'></i>{' '}
                                Portfolio
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className='nav-link'
                                onClick={() => {
                                    handleMenuClose();
                                }}
                            >
                                <i className='bi bi-envelope nav-icon'></i>{' '}
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Close Menu Button */}
                    {isMenuOpen && (
                        <i
                            className='bi bi-x nav-close'
                            onClick={handleMenuClose}
                        ></i>
                    )}
                </div>

                {/* Theme Toggle */}
                {!isMenuOpen && (
                    <div className='switch-theme'>
                        <ReactSwitch
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                            onColor='#ff7028'
                            offColor='#3a3ae3'
                            onHandleColor='#272727'
                            activeBoxShadow='0 0 2px 3px #3bf'
                            uncheckedIcon={false}
                            checkedIcon={false}
                        ></ReactSwitch>
                    </div>
                )}

                <div className='nav-toggle' onClick={handleMenuToggle}>
                    <i className='bi bi-list'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
