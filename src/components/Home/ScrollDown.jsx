import { HashLink } from 'react-router-hash-link';

const ScrollDown = () => {
    return (
        <div className="home-scroll">
            <HashLink to="#about" className="home-scroll-button button-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="var(--title-color)" className="bi bi-mouse" viewBox="0 0 16 16">
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
            </svg>
            <span className="home-scroll-name">Scroll Down</span>
            <i className="bi bi-arrow-down home-scroll-arrow"></i>
            </HashLink>
        </div>
    )
}

export default ScrollDown;