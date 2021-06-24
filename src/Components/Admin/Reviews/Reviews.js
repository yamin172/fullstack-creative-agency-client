import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Reviews = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
    const productData = {
        name: data.name,
        company: data.company,
        imageURL: imageURL,
    };
    const url = `http://localhost:3000/`;

    console.log(productData);

    fetch(url, {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(productData),
    }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "95a648ff4892a9afaf33547153698815");
        imageData.append("image", event.target.files[0]);

        axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then(function (response) {
            setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
        }
    
    return (
        <div className="container mt-5">
        <div className="card shadow border-0">
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 m-auto"
            style={{ width: "300px" }}
            >
            <input
                placeholder="Name"
                {...register("name", { required: true })}
                className="m-2 form-control"
            />

            <input
                placeholder="Company"
                {...register("company", { required: true })}
                className="m-2 form-control"
            />

            <input
                type="file"
                onChange={handleImageUpload}
                className="form-control m-2"
            />

            <input type="submit" className="btn btn-success m-2 form-control" />
            </form>
        </div>
    </div>
);
};

export default Reviews;
