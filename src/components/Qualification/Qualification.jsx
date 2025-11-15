import './qualification.css';
import { useState } from 'react';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className='qualification section'>
            <h2 className='section-title'>Qualifications</h2>
            <span className='section-subtitle'>
                My personal learning journey
            </span>

            <div className='qualification-container container'>
                <div className='qualification-tabs'>
                    <div
                        className={
                            toggleState === 1
                                ? 'qualification-button qualification-active button-flex'
                                : 'qualification-button button-flex'
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className='bi bi-mortarboard qualification-icon'></i>{' '}
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? 'qualification-button qualification-active button-flex'
                                : 'qualification-button button-flex'
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className='bi bi-clock-history qualification-icon'></i>{' '}
                        Experience
                    </div>
                </div>

                <div className='qualification-sections'>
                    <div
                        className={
                            toggleState === 1
                                ? 'qualification-content qualification-content-active'
                                : 'qualification-content'
                        }
                    >
                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    JavaScript Foundations Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    Mozilla
                                </span>
                                <div className='qualification-calendar'>
                                    Jan 2025 - Mar 2025 <br />
                                    Grade: 100% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    BSc Computer Science (Part-Time)
                                </h3>
                                <span className='qualification-subtitle'>
                                    Goldsmiths - London
                                </span>
                                <div className='qualification-calendar'>
                                    Apr 2024 - Ongoing <br />
                                    {/* Grade: 96% <br /> */}
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    Ask Questions to Make Data-Driven Decisions
                                </h3>
                                <span className='qualification-subtitle'>
                                    Google
                                </span>
                                <div className='qualification-calendar'>
                                    July 2024 - Sep 2024 <br />
                                    Grade: 94% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    Foundations: Data, Data, Everywhere
                                </h3>
                                <span className='qualification-subtitle'>
                                    Google
                                </span>
                                <div className='qualification-calendar'>
                                    July 2024 - Sep 2024 <br />
                                    Grade: 98% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    React Basics Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    Meta
                                </span>
                                <div className='qualification-calendar'>
                                    Nov 2023 - Jan 2024 <br />
                                    Grade: 92% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    Programming with JavaScript Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    Meta
                                </span>
                                <div className='qualification-calendar'>
                                    Nov 2023 - Jan 2024 <br />
                                    Grade: 96% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    HTML and CSS in depth Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    Meta
                                </span>
                                <div className='qualification-calendar'>
                                    Nov 2023 - Jan 2024 <br />
                                    Grade: 88% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    Version Control Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    Meta
                                </span>
                                <div className='qualification-calendar'>
                                    Nov 2023 - Jan 2024 <br />
                                    Grade: 91.87% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    Introduction to Front-End Development
                                    Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    Meta
                                </span>
                                <div className='qualification-calendar'>
                                    Nov 2023 - Jan 2024 <br />
                                    Grade: 93.75% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    Frontend Web Development Certificate
                                </h3>
                                <span className='qualification-subtitle'>
                                    EdX - London
                                </span>
                                <div className='qualification-calendar'>
                                    Sep 2022 - Feb 2023 <br />
                                    Grade: 100% <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? 'qualification-content qualification-content-active'
                                : 'qualification-content'
                        }
                    >
                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    Career Transition (Full-Time)
                                </h3>
                                <span className='qualification-subtitle'>
                                    London - Freelance
                                </span>
                                <div className='qualification-calendar'>
                                    Mar 2025 - Present <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    Business Development Manager + Social Media
                                    & Publishing (Full-Time)
                                </h3>
                                <span className='qualification-subtitle'>
                                    VDC Trading
                                </span>
                                <div className='qualification-calendar'>
                                    Mar 2022 - Mar 2025 <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    Parts Specialist (Full-Time)
                                </h3>
                                <span className='qualification-subtitle'>
                                    London - Wolesley
                                </span>
                                <div className='qualification-calendar'>
                                    May 2021 - Mar 2022 <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>
                                    Parts Specialist (Full-Time)
                                </h3>
                                <span className='qualification-subtitle'>
                                    Reading - Mercedes-Benz (Vertu PLC)
                                </span>
                                <div className='qualification-calendar'>
                                    Arp 2018 - May 2021 <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>
                                    Parts Advisor (Full-Time)
                                </h3>
                                <span className='qualification-subtitle'>
                                    Birmingham - PartShop245 & BSM (Vertu PLC)
                                </span>
                                <div className='qualification-calendar'>
                                    Mar 2015 - Apr 2018 <br />
                                    <i className='bi bi-calendar3'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
