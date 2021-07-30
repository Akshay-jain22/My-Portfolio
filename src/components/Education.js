import React from 'react'

const Education = () => {
    return (
        <div className="flex relative w-full h-96 object-fill justify-center">
            <div className="absolute z-auto w-full h-96 object-fill">
                <video autoPlay loop muted className="w-full h-96 object-fill">
                    <source src="./nitk_beach.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="absolute z-auto text-7xl mt-24 text-white" style={{ "textShadow": "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
                Education
            </div>
            <div className="absolute z-auto text-3xl mt-56 text-white" style={{ "textShadow": "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
                National Institute of Technology Karnataka
            </div>
        </div >
    )
}

export default Education
