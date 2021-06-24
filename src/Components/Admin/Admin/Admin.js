import { faEdit, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Reviews from '../Reviews/Reviews';

const Admin = () => {
    return (
        <section className="row">
            <div className="col-md-2 admin-btn text-light">
            <h3 className="text-center mt-3">Dashboard</h3>
            <a to="">
                <h6 className="text-light m-4 mt-4">
                <FontAwesomeIcon icon={faTasks} /> Manage Product
                </h6>
            </a>
            <a to="">
                <h6 className="text-light m-4 mt-4">
                <FontAwesomeIcon icon={faPlus} /> Add Product
                </h6>
            </a>
            <a to="">
                <h6 className="text-light m-4 mt-4">
                <FontAwesomeIcon icon={faEdit} /> Edit Product
                </h6>
            </a>
            </div>
            <div className="col-md-10 reviews">
            <div>
                <Reviews></Reviews>
            </div>
            </div>
        </section>
    );
};

export default Admin;