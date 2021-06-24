import React from "react";
import './Testimonials.css';
import Testimonial from "../Testimonial/Testimonial";

const testimonialData = [
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
        name: "Wilson Harry",
        from: "California",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU",
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
        name: "Ema Gomez",
        from: "California",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU",
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
        name: "Aliza Farari",
        from: "California",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU",
    },
];
const Testimonials = () => {
    return (
        <section className="testimonials  py-5 testimonials-section">
        <div className="container">
            <div className="section-header">
            <h5 className="text-primary text-uppercase">Testimonial</h5>
            <h1>
                What Our Customers <br /> Says{" "}
            </h1>
            </div>
            <div className="card-deck mt-5">
                    {
                        testimonialData.map((testimonial) => ( <Testimonial testimonial={testimonial} key={testimonial.name} />))
                    }
            </div>
        </div>
        </section>
    );
};

export default Testimonials;
