import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    return (
        <div className="mb-5 mt-3 bg-light text-center border rounded p-3 service-card">
            <div className="m-3">
                <FontAwesomeIcon icon={service.icon} className="text-info fs-1"/>
            </div>
            <h5 className="text-uppercase fw-bold">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
            <Link to="/admin" href="#admin" className="text-danger">Read More</Link>
        </div>
    );
};

export default ServiceDetails;