// Importing necessary styles, React hooks, and emailjs library
import './contact.css';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Functional component for the Contact section
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // Creating a reference for the form and state for showing success message
    const form = useRef();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Function to send an email when the form is submitted
    const sendEmail = (e) => {
        // Preventing the default form submission behavior
        e.preventDefault();

        // Using emailjs to send the form data as an email
        emailjs
            .sendForm(
                'service_hs06z9e',
                'template_we1ydwu',
                form.current,
                'ce4cg-fmky6P9w9s1'
            )
            .then(
                (result) => {
                    // Logging the result and showing success message for 5 seconds
                    console.log(result.text);
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 5000);
                },
                (error) => {
                    // Logging the error if the email sending fails
                    console.log(error.text);
                }
            );

        // Resetting the form after submission
        e.target.reset();
    };

    // JSX structure for the Contact section
    return (
        <section className='contact section grid' id='contact'>
            <h2 className='section-title'>Contact</h2>
            <span className='section-subtitle'>
                Here&apos;s a few ways you can contact me
            </span>

            <div className='contact-container container grid'>
                {/* Contact content for social links */}
                <div className='contact-content'>
                    <h3 className='contact-title'>Let&apos;s get in touch</h3>
                    <div className='contact-info'>
                        {/* LinkedIn contact card */}
                        <div className='contact-card'>
                            <i className='bi bi-linkedin contact-card-icon'></i>
                            <h3 className='contact-card-title'>LinkedIn</h3>
                            <span className='contact-card-data'></span>
                            <a
                                href='https://www.linkedin.com/in/alex-g-990137100/'
                                className='contact-button'
                                target={'_blank'}
                                rel='noreferrer'
                            >
                                Connect on LinkedIn{' '}
                                <i className='bi bi-arrow-right-short contact-button-icon'></i>
                            </a>
                        </div>

                        {/* X (formerly Twitter) contact card */}
                        {/* <div className="contact-card">
                            <i className="bi bi-twitter-x contact-card-icon"></i>
                            <h3 className="contact-card-title">X (formerly Twitter)</h3>
                            <span className="contact-card-data"></span>
                            <a href="https://twitter.com/agworksbox" className="contact-button" target={"_blank"} rel="noreferrer">
                                Connect on X{" "}
                                <i className="bi bi-arrow-right-short contact-button-icon"></i>
                            </a>
                        </div> */}
                    </div>
                </div>

                {/* Contact content for sending a project message */}
                <div className='contact-content'>
                    <h3 className='contact-title'>Send me your project</h3>

                    {/* Form for submitting a project message */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='contact-form'
                        id='contact-form'
                    >
                        {/* Form fields for name, email, and project */}
                        <div className='contact-form-container'>
                            <label htmlFor='name' className='contact-form-tag'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                className='contact-form-input'
                                placeholder='Insert your name'
                            />
                        </div>

                        <div className='contact-form-container'>
                            <label htmlFor='email' className='contact-form-tag'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className='contact-form-input'
                                placeholder='Insert your email address'
                            />
                        </div>

                        <div className='contact-form-container'>
                            <label htmlFor='name' className='contact-form-tag'>
                                Project
                            </label>
                            <textarea
                                type='text'
                                name='project'
                                id='project'
                                cols={30}
                                rows={10}
                                className='contact-form-area contact-form-input'
                                placeholder='Tell me more about your project?'
                            ></textarea>
                        </div>

                        {/* Button to submit the form */}
                        <button
                            type='submit'
                            form='contact-form'
                            className='button button-flex send-form-button'
                        >
                            Send Message
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='var(--body-color)'
                                className='bi bi-send'
                                viewBox='0 0 16 16'
                            >
                                <path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z' />
                            </svg>
                        </button>

                        {/* Showing success message if the email is sent successfully */}
                        {showSuccessMessage && (
                            <p className='success-message'>
                                Your message was sent. I will get back to you as
                                soon as possible.
                                <br />
                                {/* Check mark icon for visual confirmation */}
                                <i className='bi bi-check-circle'></i>
                            </p>
                        )}
                        {/* Inserting space that message will take up when visible */}
                        {!showSuccessMessage && (
                            <div className='success-message-empty'></div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

// Exporting the Contact component
export default Contact;
