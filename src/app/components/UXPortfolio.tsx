'use client'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import ReactPlayer from 'react-player'
import { BsGithub } from 'react-icons/bs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

export default function Portfolio() {
    return (
        <div
            id="portfolio"
            data-aos="fade-up"
            data-aos-offset="200"
            className="scroll-mt-20 box-content flex flex-col items-center justify-center w-full pb-56"
        >
            <div className="w-2/3 ">
                <div className="col-span-1 py-20 text-3xl font-bold text-center md:col-span-3">Portfolio</div>
                <div className="flex flex-col gap-8  md:px-20 ">
                    <PortfolioItems
                        title="台鐵e訂通 Redesign"
                        description="透過訪談分析原先APP的訂票流程與使用者的行為期望，選擇優化訂票、付款、取票流程，提升使用APP線上訂車票的體驗。"
                        image="/Railway/RailwayBanner.png"
                        skills={['用例分析', '使用者研究', '使用者經驗設計', '使用者介面設計']}
                        url="/project/RailwayEbooking"
                    />
                    <PortfolioItems
                        title="綠藤生機 Redesign"
                        description="透過研究分析打造網站新功能，讓新用戶的購物體驗更有效率以增加轉單率。"
                        image="/綠藤生機.png"
                        skills={['使用者研究', '使用者經驗設計', '使用者介面設計']}
                        url="https://www.behance.net/gallery/172812599/Redesign"
                    />
                    <PortfolioItems
                        title="相信音樂 Redesign"
                        description="優化商品分類頁面與搜尋系統，讓使用者更順暢找到想購買的周邊商品。"
                        image="/相信音樂.png"
                        skills={['使用者研究', '使用者經驗設計', '使用者介面設計']}
                        url="https://www.behance.net/gallery/159101593/-Redesign"
                    />
                </div>
            </div>
        </div>
    )
}
interface PortfolioItemsProps {
    title: string
    image: string
    skills: string[]
    description: string
    url: string
}
const PortfolioItems = (props: PortfolioItemsProps) => {
    const { title, image, skills, description } = props
    const router = useRouter()

    return (
        <div className="overflow-x-hidden">
            <div
                className="flex flex-row items-center justify-start  bg-white border-b-8 border-black cursor-pointer border-5 hover:shadow-2xl rounded-xl"
                onClick={() => router.push(props.url)}
            >
                <Image
                    src={image}
                    alt={title}
                    className="w-1/2 object-cover  border-black rounded-md border-r-5"
                    width={800}
                    height={500}
                    quality={100}
                    priority
                />
                <div className=" text-left px-4 md:px-8 w-1/2 gap-8 flex flex-col">
                    <div className="pt-4 text-2xl font-bold ">{title}</div>
                    <div className="text-md  leading-6 text-gray-500 ">{description}</div>
                    <div className="flex flex-wrap gap-0.5  items-center justify-start">
                        {skills.map((skill: string, index: number) => (
                            <div key={index} className="px-1 text-xs text-gray-500 ">{`#${skill}`}</div>
                        ))}
                    </div>
                    <Button
                        className="border-1 bg-white border-gray-500 text-gray-500 text-xs  w-1/4"
                        variant="bordered"
                        size="sm"
                        onClick={() => router.push(props.url)}
                    >
                        了解更多
                    </Button>
                </div>
            </div>
        </div>
    )
}
