import React from 'react';
import './HeaderBanner.css';
import Man from '../../../Images/repair_man-removebg-preview.png';
const HeaderMain = () => {
    return (
        <section className="header-bg">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={Man} className="img-fluid header-person" alt="main header person"/>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-uppercase heading-text-1">Troubleshooting</h1>
                        <h1 className="text-uppercase heading-text-2">And Repairing</h1>
                        <p className="text-light mt-4 mb-4 font-monospace text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. provident minima ipsum  modi. vitae, quae in sit minus quo? Hic ipsum fugit, vitae! At, voluptas.</p>
                        <button className="btn btn-warning p-3 fw-bold">LEARN MORE</button>
                        <button className="btn btn-info p-3 fw-bold">OUR SERVICES</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;