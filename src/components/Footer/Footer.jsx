import "./footer.css"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                {/* <h1 className="footer-title">Alex Grigore</h1> */}

                <ul className="footer-list">
                    <li>
                        <HashLink to="/" smooth="true" duration={500} className="footer-link">
                        Home
                        </HashLink>
                    </li>

                    <li>
                    <Link to="/portfolio" className="footer-link">
                        Portfolio
                        </Link>
                    </li>

                    <li>
                    <HashLink to="/contact" smooth="true" duration={500} className="footer-link">
                        Contact
                        </HashLink>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://www.instagram.com/casianalexander" className="footer-social-link" target={"_blank"} rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alex-g-990137100/" className="footer-social-link" target={"_blank"} rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/agworksbox" className="footer-social-link" target={"_blank"} rel="noreferrer">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://github.com/agworkgit" className="footer-social-link" target={"_blank"} rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </div>

                <span className="footer-copy">&#169; Alex Grigore / All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;