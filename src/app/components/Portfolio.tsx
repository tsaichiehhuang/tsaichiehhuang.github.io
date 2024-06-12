'use client'
import Link from 'next/link'
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'
import ReactPlayer from 'react-player'
import { BsGithub } from 'react-icons/bs'
import Image from 'next/image'

export default function Portfolio() {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="box-content flex flex-col items-center justify-center w-full pb-56"
        >
            <div className="w-4/5 ">
                <div className="col-span-1 py-20 text-3xl font-bold text-center md:col-span-3">Portfolio</div>
                <div className="grid grid-flow-row grid-rows-3 gap-8 md:grid-rows-1 md:px-20 md:grid-cols-2">
                    <PortfolioItems
                        title="BlogHub：部落格網站"
                        description="串接Github issue api，打造給開發者分享技術文章的部落格網站"
                        image="/BlogHub.png"
                        yt=""
                        introImage="/DEMO.gif"
                        githubLink="https://github.com/tsaichiehhuang/BlogHub"
                        skills={['Next.js', 'TypeScript', 'TailwindCSS', 'Next UI']}
                        intro="有人會習慣把Github issue當作部落格分享文章，但這樣的曝光度很低，所以串接Github issue api來打造個人部落格提升文章的曝光度。"
                        features={[
                            '串接Github REST API',
                            '可以瀏覽、發表、編輯文章(等於操作在issue)',
                            '登入後可以留言',
                        ]}
                    />
                    <PortfolioItems
                        title="食時好：即時訂位訂餐系統"
                        description="打造給消費者、餐廳都能使用的即時訂位訂餐系統"
                        image="/食時好.webp"
                        yt="https://youtu.be/b0S1UzsztXc?si=KkUvyceA0W93YXh5"
                        introImage=""
                        githubLink="https://github.com/zobyyy/RapidDining"
                        skills={['Next.js', 'Figma', 'Git', 'SASS']}
                        intro="同時兼任UIUX設計以及使用Next.js來進行前端頁面開發，並串接端提供的API，打造給消費者、餐廳都能使用的即時訂位訂餐系統"
                        features={['訂位訂餐表單送出(formik,Yup)', '線上菜單(餐點客製化)', '購物車系統(cookies)']}
                    />
                    <PortfolioItems
                        title="EduStream：線上教學平台"
                        description="提供給學生/老師使用的學習平台"
                        image="/線上教學.png"
                        yt=""
                        introImage="/線上教學詳細.png"
                        githubLink="https://github.com/tsaichiehhuang/EduStream_OnlineLearningPlatform"
                        skills={['Next.js', 'TypeScript', 'TailwindCSS', 'Next UI', 'Materail UI', 'Figma', 'Git']}
                        intro="使用Next.js 前端開發線上教學平台，包含首頁的課程一覽、課程內容頁面、以及作業繳交上傳等功能"
                        features={['檔案上傳、檔案修改', '區塊 drag and drop', '根據登入者(學生/老師)顯示不同權限']}
                    />
                    <PortfolioItems
                        title="量化交易策略平台"
                        description=""
                        image="/量化交易.png"
                        yt="https://www.youtube.com/watch?v=YJd2CtJKV64"
                        introImage=""
                        githubLink=""
                        skills={['React.js', 'Figma', 'Git']}
                        intro="獲得競賽第三名，使用React.js打造方便投資人能快速查看投資標的的歷史資訊並立即交易"
                        features={[]}
                    />
                </div>
            </div>
        </div>
    )
}
interface PortfolioItemsProps {
    title: string
    image: string
    githubLink: string
    skills: string[]
    intro: string
    features: string[]
    yt: string
    introImage: string
    description: string
}
const PortfolioItems = (props: PortfolioItemsProps) => {
    const { title, image, githubLink, skills, intro, features, yt, introImage, description } = props
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <div className="overflow-x-hidden">
            <div
                className="flex flex-col items-center justify-start h-full bg-white border-b-8 border-black cursor-pointer border-5 hover:shadow-2xl rounded-xl"
                onClick={onOpen}
            >
                <div className="w-full overflow-visible bg-white h-3/5 min-h-[150px]">
                    <Image
                        src={image}
                        alt={title}
                        className="z-0 object-cover w-full h-full border-black rounded-md border-r-5 border-b-5"
                        width={310}
                        height={170}
                        quality={100}
                        priority
                    />
                </div>
                <div className="h-2/5 text-left px-4 md:px-8 w-full min-h-[150px] gap-1 flex flex-col">
                    <div className="pt-4 text-xl font-bold ">{title}</div>
                    <div className="text-sm text-gray-500 ">{description}</div>
                    <div className="flex flex-wrap gap-0.5  items-center justify-start">
                        {skills.map((skill: string, index: number) => (
                            <div key={index} className="px-1 text-xs text-gray-500 ">{`#${skill}`}</div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal
                size="5xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="border-black md:min-h-screen min-h-4/5 border-5"
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row gap-1 ">
                                <div className="w-2/5 p-2 text-white bg-red-700 border-black border-3 border-b-5 rounded-xl">
                                    {title}
                                </div>
                                <div className="flex flex-wrap gap-0.5 h-3/6 ">
                                    {skills.map((skill: string, index: number) => (
                                        <div
                                            key={index}
                                            className="px-1 text-black bg-white border-2 border-b-4 border-black text-medium rounded-xl"
                                        >{`#${skill}`}</div>
                                    ))}
                                </div>
                            </ModalHeader>
                            <ModalBody className="flex flex-col md:flex-row">
                                <div className="flex items-center justify-center bg-black border-b-8 border-black border-5 rounded-xl md:w-full">
                                    {yt && (
                                        <>
                                            <ReactPlayer url={yt} controls={true} className="hidden md:block" />
                                            <ReactPlayer
                                                url={yt}
                                                controls={true}
                                                width={320}
                                                height={240}
                                                className="flex md:hidden"
                                                playsinline={true}
                                                muted
                                            />
                                        </>
                                    )}
                                    {introImage && <Image src={introImage} alt={title} width={600} height={300} />}
                                    {!yt && !introImage && <div className="text-white">DEMO影片還在錄製中QQ</div>}
                                </div>
                                <div className="flex flex-col w-full gap-2 p-3 border-black md:w-2/5 border-5 rounded-xl">
                                    {intro !== '' && (
                                        <>
                                            <div className="font-bold">介紹</div>
                                            <div className="ml-2">{intro}</div>
                                        </>
                                    )}
                                    {features.length !== 0 && (
                                        <>
                                            <div className="font-bold">功能</div>
                                            <ul className="ml-2 list-disc list-inside">
                                                {features.map((item: string, index: number) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {githubLink !== '' && (
                                        <>
                                            <div className="font-bold">專案連結</div>

                                            <Link href={githubLink}>
                                                <button className="flex flex-row gap-2 p-2 text-sm text-white bg-black rounded-xl">
                                                    <BsGithub size={20} />
                                                    <div>Github</div>
                                                </button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <button
                                    className="px-2 py-1 text-sm font-bold bg-white border-black rounded-lg border-b-5 border-3"
                                    onClick={onClose}
                                >
                                    關閉
                                </button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
