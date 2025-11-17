import './portfolio.css';
import Project from './Project';
import projectsData from '../../data/projects-data.json';
import { useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='portfolio-container'>
            <div className='project-container container grid'>
                {projectsData.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            purpose={project.purpose}
                            problems={project.problems}
                            lessons={project.lessons}
                            techStack={project.techStack}
                            image={project.image}
                            linkDeployed={project.linkDeployed}
                            linkRepo={project.linkRepo}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;
