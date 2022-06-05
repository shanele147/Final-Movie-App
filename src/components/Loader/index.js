import React from 'react'
import "./Loader.css"

function Loader() {
    return (
        <div className='loader-wrapper'>
            <div className='loader justify-content-center align-items-center'>
                <div className='loader loader-inner'></div>
            </div>
        </div>
    )
}

export default Loader