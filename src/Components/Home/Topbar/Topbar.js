import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
    return (
            <nav style={{height: '38px'}} class="navbar navbar-light bg-secondary text-light">
            <div class="container-fluid container">
                <div class="d-flex ml-auto">
                    <div class="me-5"><p><span class="text-info me-1"><FontAwesomeIcon icon={faPhone} /></span> +(123) 88 626 485</p></div>
                    <div class="me-5"><p><span class="text-info me-1"><FontAwesomeIcon icon={faEnvelope} /></span> info@electricianpress.com</p></div>
                </div>
            </div>
            </nav>
    );
};

export default Topbar;