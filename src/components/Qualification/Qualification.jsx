import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1); 
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section-title">Qualifications</h2>
            <span className="section-subtitle">My personal learning journey</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={ toggleState === 1 
                        ? "qualification-button qualification-active button-flex" 
                        : "qualification-button button-flex"} onClick={() => toggleTab(1)}>
                        <i className="bi bi-mortarboard qualification-icon"></i>{" "}
                        Education
                    </div>

                    <div className={ toggleState === 2 
                        ? "qualification-button qualification-active button-flex" 
                        : "qualification-button button-flex"} onClick={() => toggleTab(2)}>
                        <i className="bi bi-clock-history qualification-icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div className={ toggleState === 1 
                        ? "qualification-content qualification-content-active" 
                        : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Frontend Web Development Certificate</h3>
                                <span className="qualification-subtitle">London - edX</span>
                                <div className="qualification-calendar">
                                    Sep 2023 - Feb 2024 <br />
                                    Grade: 100% <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">React Basics Certificate</h3>
                                <span className="qualification-subtitle">Remote - Meta</span>
                                <div className="qualification-calendar">   
                                    Jan 2024 - Jan 2024 <br />
                                    Grade: 92% <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Programming with JavaScript Certificate</h3>
                                <span className="qualification-subtitle">Remote - Meta</span>
                                <div className="qualification-calendar">
                                    2020 - Present <br />
                                    Grade: 96% <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">HTML and CSS in depth Certificate</h3>
                                <span className="qualification-subtitle">Remote - Meta</span>
                                <div className="qualification-calendar">        
                                    Dec 2023 - Jan 2024 <br />
                                    Grade: 88% <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Version Control Certificate</h3>
                                <span className="qualification-subtitle">Remote - Meta</span>
                                <div className="qualification-calendar">
                                    Dec 2023 - Jan 2024 <br />
                                    Grade: 91.87% <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Introduction to Front-End Development Certificate</h3>
                                <span className="qualification-subtitle">Remote - Meta</span>
                                <div className="qualification-calendar">        
                                    Dec 2023 - Dec 2023 <br />
                                    Grade: 93.75% <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ toggleState === 2 
                        ? "qualification-content qualification-content-active" 
                        : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Full Stack Engineer (Freelance)</h3>
                                <span className="qualification-subtitle">Remote - The Odin Project</span>
                                <div className="qualification-calendar">
                                    Dec 2023 - Present <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Business Development Manager (Full-Time)</h3>
                                <span className="qualification-subtitle">London - VDC Trading</span>
                                <div className="qualification-calendar">
                                    Mar 2022 - Present <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Assistant Sales Manager (Full-Time)</h3>
                                <span className="qualification-subtitle">London - Wolseley</span>
                                <div className="qualification-calendar">
                                    Jun 2021 - Mar 2022 <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Music Producer/DJ (Freelance)</h3>
                                <span className="qualification-subtitle">London & Remote - Mono Mode / Pitchpilot</span>
                                <div className="qualification-calendar"> 
                                    Mar 2020 - Jun 2021 <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Sales Representative & Parts Advisor (Full-Time)</h3>
                                <span className="qualification-subtitle">Reading - Mercedes-Benz</span>
                                <div className="qualification-calendar">
                                    Oct 2018 - Mar 2020 <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Sales Advisor & Customer Support (Full-Time)</h3>
                                <span className="qualification-subtitle">Birmingham - Vertu Motors PLC</span>
                                <div className="qualification-calendar"> 
                                    Mar 2015 - Apr 2018 <br />
                                    <i className="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;