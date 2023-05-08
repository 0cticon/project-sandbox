import React from 'react'
import Title from "../components/Title";
export default function RandomizeColors() {
    return (
        <div className="container">
            <Title text={"Randomize Colors"} classes={"mb-4"} />
            <button className='btn btn-danger'>Click me</button>
            <button className='btn btn-success'>Click me</button>
            <button className='btn btn-primary'>Click me</button>
            <button className='btn btn-warning'>Click me</button>
        </div>
    );
}
