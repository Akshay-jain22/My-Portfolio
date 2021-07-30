import React from 'react'
import { links } from '../data'

const Footer = () => {
    return (
        <div>
            <div className="flex justify-center pb-4 footer pb-8">
                <a href="mailto:akshayjain222002@gmail.com" className="m-3">
                    <img src="./email.svg" alt="Email" className="w-5 h-5" />
                </a>

                <a href={links.linkedin} className="m-3">
                    <img src="./linkedin.svg" alt="Linkedin" className="w-5 h-5" />
                </a>

                <a href={links.github} className="m-3">
                    <img src="./github.svg" alt="Github" className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}

export default Footer
