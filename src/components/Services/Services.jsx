import { useState } from "react";
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0); 
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">Here&apos;s how I can help</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="bi bi-phone services-icon"></i>
                        <h3 className="services-title">
                            UI/UX <br /> Designer
                        </h3>
                    </div>

                    <span className="services-button" onClick={() => { toggleTab(1) }}>View More
                        <i className="bi bi-arrow-right-short services-button-icon"></i>
                    </span>

                    <div className={ toggleState === 1 ? "services-modal active-modal" : "services-modal" }>
                        <div className="services-modal-content">
                            <i className="bi bi-x services-modal-close" onClick={() => { toggleTab(0) }}></i>

                            <h3 className="services-modal-title">UI/UX Designer</h3>
                            <p className="services-modal-description">
                            I will create the user interface for an app, website, or other interactive media.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Gather requirements.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Illustrate design ideas.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Design graphic interface elements, like menus, tabs and widgets.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Build page navigation buttons and search fields.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Develop UI mockups and prototypes.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Create original graphic designs.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Prepare and present rough drafts.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Identify and troubleshoot UX problems (e.g. responsiveness).</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Conduct layout adjustments based on user feedback.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Follow standards on fonts, colors, contrast and images.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="bi bi-play-circle services-icon"></i>
                        <h3 className="services-title">Front-End <br /> Developer</h3>
                    </div>

                    <span className="services-button" onClick={() => { toggleTab(2) }}>View More
                        <i className="bi bi-arrow-right-short services-button-icon"></i>
                    </span>

                    <div className={ toggleState === 2 ? "services-modal active-modal" : "services-modal" }>
                        <div className="services-modal-content">
                            <i className="bi bi-x services-modal-close" onClick={() => { toggleTab(0) }}></i>

                            <h3 className="services-modal-title">Front-End Developer</h3>
                            <p className="services-modal-description">
                            I will create your websites or web application adhering to overall performance, search engine optimisation, user accessibility and clear calls to action.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Gather info about website&apos;s purpose.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Gather design resources.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Create wireframe and layout.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Implement navigation.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Create pages, fonts, colors from the design resources.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Add images, videos or music.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Implement interactivity, visual or practical (search, payments, email, maps, booking system, etc.).</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Content organisation.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Test driven development.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="bi bi-eyeglasses services-icon"></i>
                        <h3 className="services-title">Back-End <br /> Developer</h3>
                    </div>

                    <span className="services-button" onClick={() => { toggleTab(3) }}>View More
                        <i className="bi bi-arrow-right-short services-button-icon"></i>
                    </span>

                    <div className={ toggleState === 3 ? "services-modal active-modal" : "services-modal" }>
                        <div className="services-modal-content">
                            <i className="bi bi-x services-modal-close" onClick={() => { toggleTab(0) }}></i>

                            <h3 className="services-modal-title">Back-End Developer</h3>
                            <p className="services-modal-description">
                            I will create, maintain, test, and debug the back end of your application or system.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Communication.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Writing clean and scalable code.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Software testing.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Developing and debugging product components.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Identifying and correcting possible errors.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">API knowledge.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Database management.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Server-side languages (Node JS, Python).</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Server applications.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Security.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;