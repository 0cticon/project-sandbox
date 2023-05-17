import React from 'react'
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
    const handleClick = () => {
        console.log("My Click");
    }
    return (
        <div className='container m-auto'>
            <Title text={"Testimonials App"} />
            <Button
                text={"Posts"}
                btnClass="btn-info"
                icon={<BsFillFileEarmarkPostFill />}
                onClick={handleClick}
            />{""}
            <Button
                text={"Users"}
                btnClass='btn-info'
                icon={<FaUserAlt />}
                onClick={handleClick}
            />
            <Button
                text={"Comment"}
                btnClass='btn-info'
                icon={<BiCommentDetail />}
                onClick={handleClick}
            />

        </div>
    );

}
