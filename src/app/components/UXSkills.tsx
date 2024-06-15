'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const programmingLanguages = ['Next.js', 'React.js', 'Vue.js', 'TypeScript', 'Python']
const UIKits = ['Next UI', 'Material UI']
const CSSFrameworks = ['Tailwind CSS', 'SASS']
const designTools = ['Figma']
const versionControl = ['Git']
const UIUX = ['Wireframing', 'Prototyping', 'Design system', 'Mockup']
const Tools = ['Figma', 'FigJam', 'Visual Studio Code', 'Git', 'GitHub']
const UserResearch = ['Design Thinking', 'User Story', 'Persona', 'User Journey Map', 'User Flow', 'Usability Test']
const Coding = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']

export default function UXSkills() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div
            id="skills"
            data-aos="fade-up"
            data-aos-offset="200"
            className="scroll-mt-40 w-full pb-20 flex-col gap-4 flex items-center"
        >
            <div className="py-16 text-3xl font-bold text-center col-span-6">Skills & Tools</div>
            <div className=" w-4/5 md:w-3/4 flex flex-col md:flex-row gap-4 justify-center items-start h-full">
                <div className="h-full w-full md:w-fit p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">UI/UX</div>
                    <div className="ml-16 md:ml-4">
                        {UIUX.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-fit p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">User Research</div>
                    <div className="ml-16 md:ml-4">
                        {UserResearch.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-fit p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">Coding</div>
                    <div className="ml-16 md:ml-4">
                        {Coding.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-fit p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">Tools</div>
                    <div className="ml-16 md:ml-4">
                        {Tools.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
