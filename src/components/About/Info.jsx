// Functional component for displaying additional information in the About section
const Info = () => {
    return (
        // Container for information displayed in a grid
        <div className="about-info grid">
            {/* Box for displaying experience information */}
            <div className="about-box">
                {/* Icon representing experience */}
                <i className="bi bi-award about-icon"></i>
                {/* Title for the information section */}
                <h3 className="about-title">
                    Experience
                </h3>
                {/* Subtitle with the specific experience value */}
                <span className="about-subtitle">
                    9+ Years    
                </span>
            </div>

            {/* Box for displaying completed projects information */}
            <div className="about-box">
                {/* Icon representing completed projects */}
                <i className="bi bi-briefcase about-icon"></i>
                {/* Title for the information section */}
                <h3 className="about-title">
                    Completed
                </h3>
                {/* Subtitle with the specific completed projects value */}
                <span className="about-subtitle">
                    27+ Projects     
                </span>
            </div>

            {/* Box for displaying support information */}
            <div className="about-box">
                {/* Icon representing support */}
                <i className="bi bi-headset about-icon"></i>
                {/* Title for the information section */}
                <h3 className="about-title">
                    Support
                </h3>
                {/* Subtitle with the specific support information */}
                <span className="about-subtitle">
                    Online 24/7 
                </span>
            </div>
        </div>
    )
}

// Exporting the Info component
export default Info;
