import Frontend from './Frontend';
import Backend from './Backend';
import Languages from './Languages';
import DevOps from './DevOps';
import './skills.css';

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className='section-title'>Skills</h2>
            <span className='section-subtitle'>
                My technical proficiency in Frontend, Backend, Languages and
                DevOps
            </span>

            <div className='skills-container container grid'>
                <Frontend />
                <Backend />
                <Languages />
                <DevOps />
            </div>
        </section>
    );
};

export default Skills;
