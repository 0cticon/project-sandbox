import React from 'react'
import Title from "../components/Title";
export default function RandomizeColors() {

    function handleClick(event) {
        // console.log("click");
        console.log(event.target);
    }

    const handleSecClick = (e) => {
        console.log(e.target);

    };
    return (
        <div className="container m-auto text-center">
            <Title text={"Randomize Colors"} classes={"mb-4"} />
            <button
                className='btn btn-danger'
                onClick={(event) => handleClick(event)}
            >
                Click me
            </button>
            <button className='btn btn-success' onClick={handleSecClick}>Click me</button>
            <button className='btn btn-primary'>Click me</button>
            <button className='btn btn-warning'>Click me</button>
        </div>
    );
}
