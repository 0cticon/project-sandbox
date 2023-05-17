import React from 'react'

export default function Button({ text = "click", btnClass = 'click', icon }) {
    return (
        <button className={`btn ${btnClass}`}>
            {icon}
            {text}
        </button>
    )
}
