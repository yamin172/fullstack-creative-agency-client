import React from 'react';

const WelcomeInfoDetails = ({data}) => {
    return (
        <section className="d-flex">
                <img src={data.image} className="img-fluid w-50 mb-4" alt="electrician person"/>
            <div className="ms-4">
                <h5 className="text-uppercase">{data.title}</h5>
                <p className="text-secondary">{data.description}</p>
                <a href="#" className="text-info">Read More</a>
            </div>
        </section>
    );
};

export default WelcomeInfoDetails;