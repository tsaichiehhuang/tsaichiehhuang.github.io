'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { Image, Link } from '@nextui-org/react'

export default function AboutMe() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div
            id="about-me"
            data-aos="fade-up"
            data-aos-offset="200"
            className="scroll-mt-96 2xl:scroll-mt-96 overflow-x-hidden"
        >
            <div className=" flex flex-col items-center justify-center w-full py-8 md:py-40 2xl:py-8 gap-4">
                <div className="flex flex-col items-center justify-center w-4/5 p-4 bg-white border-b-8 border-black md:flex-row lg:w-3/5 2xl:w-2/5 md:p-10 border-5 rounded-xl">
                    <div className="w-3/5 md:w-full">
                        <Image alt="avatar" src="/photo.jpg" width={700} />
                    </div>
                    <div className="flex flex-col gap-4 p-8 text-left md:ml-4 ">
                        <div className="text-xl font-bold md:text-3xl">About me | Kelly 黃采婕</div>
                        <p>
                            我是一名UI/UX設計師與前端工程師，致力於創建具有高互動性和良好使用者體驗的網站，擁有豐富的UI/UX設計及前端開發經驗，藉由不斷挑戰自我、積極參與競賽和專案，展現自己出色的能力。
                        </p>

                        <div>
                            <div className="flex flex-row items-center gap-2 px-2 py-1 text-sm text-black rounded-xl hover:bg-black/10">
                                <MdOutlineEmail />
                                a0970605512@gmail.com
                            </div>
                            {/* <Link
                                href="https://github.com/tsaichiehhuang"
                                className="flex flex-row items-center gap-2 text-sm "
                                isBlock
                                showAnchorIcon
                                color="foreground"
                            >
                                <BsGithub />
                                tsaichiehhuang
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
