import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import man1 from "../../../Images/electricianMan1.jpg";
import man2 from "../../../Images/electricianMan2.jpg";
import WelcomeInfoDetails from "../WelcomeInfoDetails/WelcomeInfoDetails";

const infosData = [
    {
        title: 'commercial services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque, fugit corrupti blanditiis quis illum.',
        image: man1
    },
    {
        title: 'residential services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque, fugit corrupti blanditiis quis illum.',
        image: man2
    }
]
const WelcomeInfo = () => {
    return (
        <section>
            <div className="container mt-5">
            <div className="row mb-4">
                <div className="col md-6">
                <h3 className="text-capitalize">welcome to electrician and repairing</h3>
                <p className="text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores quibusdam enim, dolorum, doloremque velit atque a
                    sapiente, nostrum voluptas quod dolore dicta quia. Reiciendis
                    deserunt fugit deleniti praesentium repudiandae qui!
                </p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-info">
                    <FontAwesomeIcon icon={faArrowCircleRight} /> Faulty and old
                    wiring
                    </li>
                    <li class="list-group-item text-info">
                    <FontAwesomeIcon icon={faArrowCircleRight} /> Misuse of
                    extension cords
                    </li>
                    <li class="list-group-item text-info">
                    <FontAwesomeIcon icon={faArrowCircleRight} /> Faulty
                    electrical appliances
                    </li>
                    <li class="list-group-item text-info">
                    <FontAwesomeIcon icon={faArrowCircleRight} /> Overuse of
                    electricity
                    </li>
                    <li class="list-group-item text-info">
                    <FontAwesomeIcon icon={faArrowCircleRight} /> Short circuit
                    and poor maintenance
                    </li>
                </ul>
            </div>
                <div className="col md-6">
                    <div className="mt-3">
                            {
                                infosData.map(data => <WelcomeInfoDetails data={data}></WelcomeInfoDetails>)
                            }
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default WelcomeInfo;
