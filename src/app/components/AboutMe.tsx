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
        <div data-aos="fade-up" data-aos-offset="200" className="overflow-x-hidden">
            <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
                <div className="flex flex-col items-center justify-center w-4/5 p-4 bg-white border-b-8 border-black md:flex-row md:w-3/5 md:p-10 border-5 rounded-xl">
                    <div className="w-3/5 md:w-full">
                        <Image alt="avatar" src="/photo.jpg" width={700} />
                    </div>
                    <div className="flex flex-col gap-4 p-8 text-left md:ml-4 ">
                        <div className="text-xl font-bold md:text-3xl">About me | Kelly 黃采婕</div>
                        <p>
                            我是一名前端工程師，致力於創建具有高互動性和良好使用者體驗的網站，擁有豐富的前端開發及UIUX設計經驗，藉由不斷挑戰自我、積極參與程式設計競賽和專案，展現自己出色的前端能力。
                        </p>

                        <div>
                            <div className="flex flex-row items-center gap-2 px-2 py-1 text-sm text-black rounded-xl hover:bg-black/10">
                                <MdOutlineEmail />
                                a0970605512@gmail.com
                            </div>
                            <Link
                                href="https://github.com/tsaichiehhuang"
                                className="flex flex-row items-center gap-2 text-sm "
                                isBlock
                                showAnchorIcon
                                color="foreground"
                            >
                                <BsGithub />
                                tsaichiehhuang
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills"></div>
        </div>
    )
}
