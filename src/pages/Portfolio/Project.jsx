import "./portfolio.css"
/* eslint-disable react/prop-types */

function Project(props) {
    //Body
    return (
    <div className="project-container">
    <div className="project-card">
        
        <img src={props.image} className="project-image"></img>
        <h2 className="project-title">{props.title}</h2>
        <h3 className="project-section-subtitle">Decription</h3>
        <p className="project-subtitle">{props.description}</p>
        <h3 className="project-section-subtitle">Purpose</h3>
        <p className="project-purpose">{props.purpose}</p>
        <h3 className="project-section-subtitle">Challenges</h3>
        <p className="project-purpose">{props.problems}</p>
        <h3 className="project-section-subtitle">Lessons</h3>
        <p className="project-purpose">{props.lessons}</p>
        <p className="project-subtitle"><span className="tech-stack-tags">{props.techStack}</span></p>
        <div className="link-buttons-container">
        <a href={props.linkDeployed} target="_blank" rel="noreferrer" className="button button-flex project-deployed-button">
            <i className="bi bi-box-arrow-right dep-icon"></i>
            Live Link</a>
        <a href={props.linkRepo} target="_blank" rel="noreferrer" className="button button-flex project-repo-button">
            <i className="bi bi-folder rep-icon"></i>
            Code Link</a>
        </div>
    </div>
    </div>)
}

export default Project;
