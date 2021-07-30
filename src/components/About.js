import React from 'react'
import { links } from "../data"

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Akshay
                    </h1>
                    <h2 className="title-font sm:text-2xl text-3xl mb-8 font-medium">
                        I help people by building software technologies.
                    </h2>
                    <div className="flex justify-center">
                        <a
                            href={links.linkedin}
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                            target="_blank" rel="noopener noreferrer">
                            Connect With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./typing.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default About