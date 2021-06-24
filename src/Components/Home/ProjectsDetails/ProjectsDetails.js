import React from 'react';

const ProjectsDetails = ({ project }) => {
    
    return (
        <div className="col-md-4 mt-5">
            <div class="" style={{width:'28rem'}}>
                <img src={project.image} class="w-75 mx-auto img-fluid" alt="worker pic"/>
                <h5 class="text-dark position-relative  text-uppercase ms-lg-5 ">{project.title}</h5>
            </div>
        </div>
    );
};

export default ProjectsDetails;