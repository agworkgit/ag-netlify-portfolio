// Importing necessary styles and dependencies
import './backtotop.css';
import { HashLink } from 'react-router-hash-link';

// Functional component for the BackToTop button
const BackToTop = () => {
    // Adding a scroll event listener to the window
    window.addEventListener('scroll', function () {
        // Selecting the BackToTop button element
        const backToTop = document.querySelector('.back-to-top');

        // Checking if the vertical scroll position is greater than or equal to 560
        this.scrollY >= 3500
            ? backToTop.classList.add('show-scroll') // Adding a class to show the BackToTop button
            : backToTop.classList.remove('show-scroll'); // Removing the class to hide the BackToTop button

        // If the viewport is past 560px, show arrow back to top
    });

    // JSX structure for the BackToTop button
    return (
        <HashLink to='#' className='back-to-top'>
            {/* Icon for the BackToTop button */}
            <i className='bi bi-arrow-up-circle-fill back-to-top-icon'></i>
        </HashLink>
    );
};

// Exporting the BackToTop component
export default BackToTop;
