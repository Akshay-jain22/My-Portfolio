import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { links } from "../data";

const Navbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-40">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Akshay Jain
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    {/* <a href={links.resume} target="_blank" className="mr-5 hover:text-white" rel="noopener noreferrer">Resume</a> */}
                    <a href={links.linkedin} target="_blank" className="mr-5 hover:text-white" rel="noopener noreferrer">Linkedin</a>
                    <a href={links.github} target="_blank" className="mr-5 hover:text-white" rel="noopener noreferrer">Github</a>
                </nav>
                <a
                    href="#footer"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>

    )
}

export default Navbar
