import React from 'react'
import { UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
    return (
        <section id="experience">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Experience
                </h1>
                <div className="flex flex-wrap m-4">
                    {experiences.map((experience) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <div className="inline-flex items-center mb-2">
                                    <img
                                        alt="testimonial"
                                        src={experience.image}
                                        className="w-20 flex-shrink-0 object-cover object-center"
                                    />
                                </div>

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">
                                        {experience.organization}
                                    </span>
                                    <span className="text-gray-200 text-sm">
                                        {experience.role} | {experience.timeline}
                                    </span>
                                </span>
                                <div className="flex text-green-300 mt-5 justify-center">
                                    <ul>
                                        {experience.description.map((item, index) => (
                                            <li key={index}>{item} </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
