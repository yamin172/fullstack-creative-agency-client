import React from 'react';
import ProjectsDetails from '../ProjectsDetails/ProjectsDetails';
import worker from '../../../Images/worker.jpg';
import worker1 from '../../../Images/worker1.jpg';
import worker2 from '../../../Images/worker2.jpg';
import worker3 from '../../../Images/worker3.jpg';
import worker4 from '../../../Images/worker4.jpg';
import worker5 from '../../../Images/worker5.jpg';


const project = [
    {
        title: "testing & inspection",
        image: worker
    },
    {
        title: "domestic project",
        image: worker1
    },
    {
        title: "commercial project",
        image: worker2
    },
    {
        title: "official project",
        image: worker3
    },
    {
        title: "repairing maintenance",
        image: worker4
    },
    {
        title: "checking & testing",
        image: worker5
    }
];
const Projects = () => {
    return (
        <section id="projects">
            <div className="container mb-5">
                <h4 className="text-uppercase pt-5 fw-bold">our projects</h4>
                <div className="row">
                    {
                        project.map(project => <ProjectsDetails project={project}></ProjectsDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;