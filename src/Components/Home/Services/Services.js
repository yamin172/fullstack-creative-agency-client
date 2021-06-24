import { faChargingStation, faHome, faPlug, faSolarPanel, faTools, faUserCog } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        title: 'Dianosis and repair',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim?',
        icon: faUserCog
    },
    {
        title: 'Install & upgrades',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim?',
        icon: faTools
    },
    {
        title: 'Electrical maintenance',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim?',
        icon: faPlug
    },
    {
        title: 'solar system maintenance',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim?',
        icon: faSolarPanel
    },
    {
        title: 'house wiring',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim?',
        icon: faHome
    },
    {
        title: 'power store maintenance',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim?',
        icon: faChargingStation
    }
]
const Services = () => {
    return (
        <section style={{ backgroundColor: '#F5F4F4'}} id="services">
            <div className="container" style={{height:'700px'}}>
                <h4 className="text-uppercase pt-5 fw-bold">our featured services</h4>
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;