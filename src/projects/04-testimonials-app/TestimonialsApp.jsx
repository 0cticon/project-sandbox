import React, { useState, useEffect } from 'react'
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
    // const handleClick = () => {
    //     console.log("My Click");
    // };
    const [testimonials, setTestimonials] = useState();
    return (
        <div className='container m-auto'>
            <Title text={"Testimonials App"} />
            <Button
                text={"Posts"}
                btnClass="btn-info"
                icon={<BsFillFileEarmarkPostFill />}
                onClick={() => setTestimonials("Posts")}
            />{""}
            <Button
                text={"Users"}
                btnClass='btn-info'
                icon={<FaUserAlt />}
                onClick={() => setTestimonials("Users")}
            />
            <Button
                text={"Comments"}
                btnClass='btn-info'
                icon={<BiCommentDetail />}
                onClick={() => setTestimonials("Comments")}
            />
            <Title classes={"subtitle text-primary"} text={!testimonials ? "Select from above!" : testimonials} />

        </div>
    );

}
