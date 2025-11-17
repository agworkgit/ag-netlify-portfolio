import { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    useEffect(() => {
        if (toggleState !== 0) {
            document.body.classList.add('body-lock');
        } else {
            document.body.classList.remove('body-lock');
        }
    }, [toggleState]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className='services section' id='services'>
            <h2 className='section-title'>Services</h2>
            <span className='section-subtitle'>Here&apos;s how I can help</span>

            <div className='services-container container grid'>
                <div className='services-content'>
                    <div>
                        <i className='bi bi-phone services-icon'></i>
                        <h3 className='services-title'>
                            UI/UX <br /> Designer
                        </h3>
                    </div>

                    <span
                        className='services-button'
                        onClick={() => {
                            toggleTab(1);
                        }}
                    >
                        View More
                        <i className='bi bi-arrow-right-short services-button-icon'></i>
                    </span>

                    <div
                        className={
                            toggleState === 1
                                ? 'services-modal active-modal'
                                : 'services-modal'
                        }
                    >
                        <div className='services-modal-content'>
                            <i
                                className='bi bi-x services-modal-close'
                                onClick={() => {
                                    toggleTab(0);
                                }}
                            ></i>

                            <h3 className='services-modal-title'>
                                UI/UX Designer
                            </h3>
                            <p className='services-modal-description'>
                                My initial design process.
                            </p>

                            <ul className='services-modal-services grid'>
                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Develop a set of standards for all
                                        visual elements, including color
                                        palettes, typography, iconography, and
                                        spacing.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Define how elements like buttons, forms,
                                        and navigation will look in every
                                        possible state.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Build detailed, interactive prototypes
                                        of the high-fidelity mockups to simulate
                                        the look, feel, and flow of the final
                                        product.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Package all visual assets and
                                        specifications ensuring the final coded
                                        product will match the finished design
                                        exactly.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Empathise with users by conducting
                                        interviews, surveys, and competitive
                                        analysis to identify user needs, pain
                                        points, and goals.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Synthesize research into user personas
                                        and create user flows and site maps to
                                        diagram the pathways a user will take to
                                        complete tasks.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Sketch or digitally create the basic
                                        blueprint or skeletal structure of each
                                        screen, focusing on content, hierarchy,
                                        and functionality, not aesthetics.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Organise and structure the content and
                                        functionality so that users can easily
                                        find information and navigate the
                                        product logically.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Test the wireframes or prototypes with
                                        real users to identify and fix issues
                                        with the product's flow, efficiency, and
                                        overall ease of use.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services-content'>
                    <div>
                        <i className='bi bi-play-circle services-icon'></i>
                        <h3 className='services-title'>
                            Front-End <br /> Developer
                        </h3>
                    </div>

                    <span
                        className='services-button'
                        onClick={() => {
                            toggleTab(2);
                        }}
                    >
                        View More
                        <i className='bi bi-arrow-right-short services-button-icon'></i>
                    </span>

                    <div
                        className={
                            toggleState === 2
                                ? 'services-modal active-modal'
                                : 'services-modal'
                        }
                    >
                        <div className='services-modal-content'>
                            <i
                                className='bi bi-x services-modal-close'
                                onClick={() => {
                                    toggleTab(0);
                                }}
                            ></i>

                            <h3 className='services-modal-title'>
                                Front-End Developer
                            </h3>
                            <p className='services-modal-description'>
                                Turning designs into interactive experiences.
                            </p>

                            <ul className='services-modal-services grid'>
                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Write the foundational HTML markup to
                                        define the content and structure of the
                                        page, ensuring proper semantic tags are
                                        used for SEO and accessibility. The same
                                        standards are kept in mind when using
                                        Front-End frameworks.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Apply styling using CSS to match the
                                        approved UI designs. This includes
                                        defining colors, typography, spacing,
                                        and creating the responsive layout to
                                        ensure the site looks good on all screen
                                        sizes. I apply the same process when
                                        using styling technologies such as SASS
                                        and Tailwind.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Write JavaScript or use a framework
                                        (React) to add dynamic behavior and
                                        interactivity, such as form validation,
                                        fetching data from APIs and handling
                                        user input.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Write code to make requests to the
                                        Backend API to send and retrieve data
                                        (e.g., user profiles, product lists,
                                        saved information) and display that
                                        information to the user.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Test the application across different
                                        browsers and devices, debug issues, and
                                        implement performance optimisations
                                        (like code splitting or image
                                        compression) to ensure fast load times
                                        and a smooth user experience.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services-content'>
                    <div>
                        <i className='bi bi-eyeglasses services-icon'></i>
                        <h3 className='services-title'>
                            Back-End <br /> Developer
                        </h3>
                    </div>

                    <span
                        className='services-button'
                        onClick={() => {
                            toggleTab(3);
                        }}
                    >
                        View More
                        <i className='bi bi-arrow-right-short services-button-icon'></i>
                    </span>

                    <div
                        className={
                            toggleState === 3
                                ? 'services-modal active-modal'
                                : 'services-modal'
                        }
                    >
                        <div className='services-modal-content'>
                            <i
                                className='bi bi-x services-modal-close'
                                onClick={() => {
                                    toggleTab(0);
                                }}
                            ></i>

                            <h3 className='services-modal-title'>
                                Back-End Developer
                            </h3>
                            <p className='services-modal-description'>
                                My process when creating a robust backend.
                            </p>

                            <ul className='services-modal-services grid'>
                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Create the structure (schema) of the
                                        database (SQL) to efficiently store,
                                        organise, and retrieve the application's
                                        data, such as user information and
                                        product details.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Write the core business logic using a
                                        server-side language (like Node.js, or
                                        Python). This involves creating APIs and
                                        routes which are the endpoints that the
                                        frontend uses to request and manipulate
                                        data.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Ensure data is secure by implementing
                                        measures like data encryption, proper
                                        input validation, and managing user
                                        authentication (login/logout) and
                                        authorisation (what a user is allowed to
                                        access).
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Configure the application to run
                                        reliably on a server, which may involve
                                        using cloud services (like AWS, Azure,
                                        or Google Cloud), and ensuring the
                                        application can scale to handle many
                                        users.
                                    </p>
                                </li>

                                <li className='services-modal-service'>
                                    <i className='bi bi-check2-circle services-modal-icon'></i>
                                    <p className='services-modal-info'>
                                        Write unit and integration tests to
                                        verify the core business logic is
                                        working correctly and debug any issues
                                        related to database connections, API
                                        response times, or server errors before
                                        and after deployment.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
