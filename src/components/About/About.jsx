// Importing necessary styles, images, and components
import './about.css';
import AboutImage from '../../assets/images/profile-pic-2.jpg';
import CV from '../../assets/cv/alex-grigore-cv.pdf';
import Info from './Info';

// Functional component for the About section
const About = () => {
    return (
        <section id='about' className='about section'>
            {/* Section title and subtitle */}
            <h2 className='section-title'>About Me</h2>
            <span className='section-subtitle'>A brief introduction</span>

            {/* Container for the About section */}
            <div className='about-container container grid'>
                {/* Profile picture */}
                <div className='about-img-wrapper'>
                    <img
                        src={AboutImage}
                        alt='Picture of workspace'
                        className='about-image'
                    />
                </div>

                {/* Container for information and description */}
                <div className='about-data'>
                    {/* Using the Info component for additional information */}
                    <Info />

                    {/* Description */}
                    <p className='about-description'>
                        My professional life began in the demanding world of
                        business logistics and client management, where trust,
                        efficiency, and problem-solving were the currencies of
                        success. For over ten years, I honed my analytical mind
                        and organisational skills, eventually managing complex,
                        high-value workflows—including a portfolio worth over
                        £1.8 million.
                        <br />
                        <br />
                        In 2023, while looking for ways to streamline a
                        cumbersome internal reporting process, I stumbled upon a
                        resource that offered a simple, scripting solution. It
                        was a single line of code that, with a click, instantly
                        automated a task that used to take my team hours.
                        <br />
                        <br />
                        In that moment, everything shifted. I didn't just see a
                        time-saver; I saw the power of creation. I realised that
                        the same logic I used to architect multi-million-pound
                        client solutions could be applied to building scalable,
                        functional digital products, with a keen focus on
                        creating intuitive and accessible user interfaces. The
                        curiosity was immediate, and the passion was absolute.
                        <br />
                        <br />
                        I knew a career change needed to be underpinned by
                        robust, formal training. I committed to an intensive edX
                        bootcamp, which was the crucible where I forged my
                        modern technical skills. I didn't just learn syntax; I
                        mastered collaborative, real-world development
                        methodologies, focusing on the MERN stack and embracing
                        the principles of CI/CD from the start.
                        <br />
                        <br />
                        To ensure my knowledge base is foundational and
                        future-proof, I am currently advancing my expertise
                        through a BSc in Computer Science (Distance). This
                        academic rigor, combined with the practical experience
                        of building full-stack applications from scratch, allows
                        me to approach problems not just as a developer, but as
                        a systems thinker.
                        <br />
                        <br />
                        The 10+ years spent managing high-pressure business
                        environments have equipped me with a unique advantage: I
                        don't just write code; I understand the business impact
                        and the user's operational needs.
                        <br />
                        <br />
                        I'm now seeking to leverage this blend of commercial
                        acumen and robust technical skill in a dedicated
                        engineering team, focusing on the Frontend where I can
                        directly apply my analytical skills to user needs,
                        responsive design constraints, and accessibility. My
                        next focus is on achieving mastery in professional
                        testing, compliance, and codebase reliability. I am
                        ready to jump into complex challenges and contribute to
                        a team dedicated to building excellent, high-quality
                        software.
                    </p>

                    {/* Button to download CV with an associated icon */}
                    <a download='' href={CV} className='button button-flex'>
                        Download CV
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='var(--body-color)'
                            className='bi bi-file-earmark-arrow-down'
                            viewBox='0 0 16 16'
                        >
                            <path d='M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z' />
                            <path d='M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z' />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

// Exporting the About component
export default About;
