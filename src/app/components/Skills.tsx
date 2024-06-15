'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const programmingLanguages = ['Next.js', 'React.js', 'Vue.js', 'TypeScript', 'Python']
const UIKits = ['Next UI', 'Material UI']
const CSSFrameworks = ['Tailwind CSS', 'SASS']
const designTools = ['Figma']
const versionControl = ['Git']
export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div
            id="skills"
            data-aos="fade-up"
            data-aos-offset="200"
            className="scroll-mt-20 w-full pb-20 flex-col gap-4 flex items-center"
        >
            <div className="py-16 text-3xl font-bold text-center col-span-6">Skills</div>
            <div className="flex md:grid grid-cols-6 w-3/5 flex-col gap-4 grid-rows-3 md:h-2/5 h-full">
                <div className="col-span-2 row-span-3 p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">框架和語言</div>
                    <div className="ml-4">
                        {programmingLanguages.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row-span-2 col-span-2 p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">UI 庫</div>
                    <div className="ml-4">
                        {UIKits.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row-span-1 col-span-2 p-4   text-left flex-row flex items-center bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">團隊開發</div>
                    <div className="ml-4">
                        {versionControl.map((skill, index) => (
                            <div key={index}>#{skill}</div>
                        ))}
                    </div>
                </div>

                <div className="row-span-2 col-span-2 p-4  text-left flex-col flex bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">CSS 框架</div>
                    <div className="ml-4">
                        {CSSFrameworks.map((skill, index) => (
                            <div key={index} className="mt-2">
                                #{skill}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row-span-1 col-span-2 p-4   text-left flex-row flex items-center  bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="font-bold">設計工具</div>
                    <div className="ml-4">
                        {designTools.map((skill, index) => (
                            <div key={index}>#{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
