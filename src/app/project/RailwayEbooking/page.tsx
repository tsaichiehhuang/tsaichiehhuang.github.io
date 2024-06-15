'use client'

import Image from 'next/image'
import Header from '@/app/components/Header'
import VerticalNav from '@/app/components/VerticalNav'
import { Divider } from '@nextui-org/react'

export default function RailwayEbooking() {
    return (
        <>
            <Header />
            <VerticalNav />
            <div className="relative w-full h-screen">
                <div className="w-4/5 md:w-2/5 z-10 absolute left-6 h-2/5 top-1/4 start-[15%] p-4	flex flex-col justify-center items-start gap-4 bg-white/85">
                    <div className="text-5xl">台鐵e訂通</div>
                    <div className="text-xl font-semibold text-red-700">Redesign專案</div>
                    <div className="text-md">
                        透過訪談分析原先APP的訂票流程與使用者的行為期望，選擇優化訂票、付款、取票流程，提升使用APP線上訂車票的體驗。
                    </div>
                </div>
                <Image
                    src="/Railway/RailwayBanner.png"
                    alt="台鐵e訂通"
                    width={800}
                    height={400}
                    className="object-cover w-full h-screen"
                />
            </div>
            <div className="hidden md:block w-full 2xl:px-96 md:px-40 mt-20 leading-8">
                <div className=" flex flex-row items-start justify-around w-full gap-8 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl">
                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">類型</div>
                        <ul className="text-gray-500">
                            <li>介面重新設計</li>
                            <li>團體專案</li>
                        </ul>
                    </div>
                    <Divider orientation="vertical" />

                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">角色</div>
                        <ul className="text-gray-500">
                            <li>UI 設計師</li>

                            <li>UX 設計師</li>
                            <li>使用者研究員</li>
                        </ul>
                    </div>
                    <Divider orientation="vertical" />

                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">方法</div>
                        <ul className="text-gray-500">
                            <li>質性訪談</li>
                            <li>用例分析</li>
                            <li>卡片分類法</li>
                            <li>任務測試</li>
                        </ul>
                    </div>
                    <Divider orientation="vertical" />

                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">工具</div>
                        <ul className="text-gray-500">
                            <li>Figma</li>
                            <li>FigJam</li>
                        </ul>
                    </div>
                    <Divider orientation="vertical" />

                    <div className="gap-4 flex flex-col pr-6 ">
                        <div className="font-bold">時間</div>
                        <ul className="text-gray-500">
                            <li>2023.9 - 2024.1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="block md:hidden w-full px-4 mt-20 leading-8">
                <div className="text-center flex flex-col items-center justify-center w-full gap-8 p-4 bg-white border-b-8 border-black  border-5 rounded-xl">
                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">類型</div>
                        <ul className="text-gray-500">
                            <li>介面重新設計</li>
                            <li>團體專案</li>
                        </ul>
                    </div>
                    <Divider />

                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">角色</div>
                        <ul className="text-gray-500">
                            <li>UI 設計師</li>

                            <li>UX 設計師</li>
                            <li>使用者研究員</li>
                        </ul>
                    </div>
                    <Divider />

                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">方法</div>
                        <ul className="text-gray-500">
                            <li>質性訪談</li>
                            <li>用例分析</li>
                            <li>卡片分類法</li>
                            <li>任務測試</li>
                        </ul>
                    </div>
                    <Divider />

                    <div className="gap-4 flex flex-col ">
                        <div className="font-bold">工具</div>
                        <ul className="text-gray-500">
                            <li>Figma</li>
                            <li>FigJam</li>
                        </ul>
                    </div>
                    <Divider />

                    <div className="gap-4 flex flex-col  ">
                        <div className="font-bold">時間</div>
                        <ul className="text-gray-500">
                            <li>2023.9 - 2024.1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 2xl:gap-20 py-20 pb-40 leading-8">
                {/* 總覽 OVERVIEW */}
                <div id="overview" className="px-4 2xl:px-96 md:px-60 scroll-mt-20">
                    <div className="m-8 text-3xl font-bold">總覽 OVERVIEW</div>

                    <div className="flex flex-col items-start justify-center w-full gap-8 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl">
                        <div id="purpose" className="flex flex-col gap-4 scroll-mt-20">
                            <div className="text-4xl font-bold">目的</div>
                            <div>
                                我們在使用台鐵e訂通系統訂票時，總是會有一些不通順的時候導致訂票流程卡卡的，因此希望改善訂票流程，幫助乘客們都能順利訂到想要的火車，其中訂票一系列的流程是此系統最常用的功能，因此選擇以車票訂票流程，優先進行網站的再設計專案。
                            </div>
                        </div>
                        <div id="requirements" className="flex flex-col gap-4 scroll-mt-20">
                            <div className="text-4xl font-bold">需求</div>
                            <ul className="ml-6 list-disc">
                                <li>了解目前台鐵e訂通系統行為</li>
                                <li>拆解行為中未被滿足的需求</li>

                                <li>重新設計資訊架構與訂票流程</li>

                                <li>重新打造系統品牌形象</li>
                            </ul>
                        </div>
                        <div id="prototype" className="flex flex-col gap-4 scroll-mt-20">
                            <div className="text-4xl font-bold">原型</div>
                            <iframe
                                className="hidden md:block border-black border-1 rounded-xl"
                                width="700"
                                height="500"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbyyCL4uGCkI49fZPBqDHe0%2F%25E4%25BA%25BA%25E6%25A9%259F%25E4%25BA%2592%25E5%258B%2595%25E4%25BD%259C%25E6%25A5%25AD%3Fnode-id%3D239-476%26t%3Di8FHbsRt7GcluNGa-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D22%253A2%26starting-point-node-id%3D239%253A476"
                            ></iframe>
                            <iframe
                                className="border-black block md:hidden border-1 rounded-xl"
                                width="300"
                                height="695"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbyyCL4uGCkI49fZPBqDHe0%2F%25E4%25BA%25BA%25E6%25A9%259F%25E4%25BA%2592%25E5%258B%2595%25E4%25BD%259C%25E6%25A5%25AD%3Fnode-id%3D239-476%26t%3Di8FHbsRt7GcluNGa-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D22%253A2%26starting-point-node-id%3D239%253A476"
                            ></iframe>
                        </div>
                    </div>
                </div>
                {/* 問題 PROBLEM */}
                <div id="problems" className="px-4 2xl:px-96 md:px-60 scroll-mt-20">
                    <div className="m-8 text-3xl font-bold">問題 PROBLEM</div>

                    <div className="flex flex-col items-start justify-center w-full gap-4 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl">
                        <div className="flex flex-col gap-4 ">
                            <div className="text-2xl font-bold">
                                透過自身操作經驗與訪談，了解受訪者操作台鐵訂票系統感受，發現對現訂票流程的不滿意。
                            </div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                <div>
                                    受訪者使用台鐵e訂通多為觀看火車班次、提前購買火車車票、線上付款以及電子票券，目的是為了能夠方便且快速的搭到火車前往目的地。{' '}
                                </div>
                                <ul className="ml-6 list-decimal">
                                    <li>系統介面的顏色與排版過於制式，可再美觀</li>
                                    <li>會員系統不完整：無法收藏車次、無法儲存信用卡資料</li>

                                    <li>查找班次的過濾器太複雜，很難使用</li>

                                    <li>
                                        導覽不明確：側邊欄的選項過多，卻沒有固定於底部的導覽按鈕欄，會有找不到頁面的問題
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-row w-full justify-center items-center gap-8">
                                <Image
                                    src="/Railway/old_home.jpg"
                                    alt="old_home"
                                    width={200}
                                    height={100}
                                    className="w-1/5 rounded-lg shadow-md"
                                />
                                <Image
                                    src="/Railway/old_booking.jpg"
                                    alt="old_booking"
                                    width={200}
                                    height={100}
                                    className="w-1/5 rounded-lg shadow-md"
                                />

                                <Image
                                    src="/Railway/old_list.jpg"
                                    alt="old_list"
                                    width={200}
                                    height={100}
                                    className="w-1/5 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/*設計過程 PROCESS*/}
                <div id="process" className="w-full pt-10 bg-white scroll-mt-20">
                    <div className="m-8 text-3xl font-bold 2xl:px-96 md:px-60">設計過程 PROCESS</div>

                    <div className="flex flex-col items-start justify-center w-full gap-20 p-4 2xl:px-96 md:px-60 ">
                        <div
                            id="step1"
                            className="flex flex-col gap-4 scroll-mt-20 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl"
                        >
                            <div className="text-3xl font-bold">1. 了解訂票行為 </div>
                            <div className="text-xl font-bold text-red-700">訪談：深入了解訂票需求</div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                <div>
                                    訪談條件設立為：「搭乘台鐵旅遊/返鄉」、「習慣用App預先訂票」、「習慣線上支付」及「使用電子票券」，以此來了解使用者使用系統時的感受與經驗
                                </div>
                                <div>運用受訪者的回饋，描繪出Person以及建立 User Journey Map </div>
                            </div>
                            <div className="flex flex-row gap-1">
                                <Image
                                    src="/Railway/persona.png"
                                    alt="persona"
                                    width={500}
                                    height={300}
                                    className="w-1/2 shadow-md"
                                />
                                <Image
                                    src="/Railway/userjourneymap.png"
                                    alt="userjourneymap"
                                    width={500}
                                    height={300}
                                    className="w-1/2 shadow-md"
                                />
                            </div>

                            <div className="text-xl font-bold text-red-700">用例分析：拆解訂票行為步驟</div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                以卡片分類法，將上述整理的用例進行功能介面的分群。
                            </div>
                            <Image
                                src="/Railway/用例.png"
                                alt="用例"
                                width={500}
                                height={300}
                                className="w-full shadow-md"
                            />
                        </div>
                        <div
                            id="step2"
                            className="flex flex-col gap-4 scroll-mt-20 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl"
                        >
                            <div className="text-3xl font-bold">2. 資訊架構 </div>
                            <div className="text-xl font-bold text-red-700">用例組織資訊架構</div>

                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                接續上方分群後的用例介面，我們將這些介面組織起來建構出我們的資訊架構。
                                <div>
                                    我們有五項主要功能頁面，讓使用者能夠順利「查看車次」、「訂票」、「付款」以及「具個人化服務的會員系統」
                                </div>
                            </div>

                            <Image
                                src="/Railway/資訊架構.png"
                                alt="資訊架構"
                                width={500}
                                height={300}
                                className="shadow-md w-full"
                            />
                            <div className="text-xl font-bold text-red-700">資訊架構的導覽體系</div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                我們採用全區域的嵌入式導覽系統，讓使用者能夠快速找到所需的功能頁面，也能清楚知道自己在系統中的位置
                                <div>
                                    將五項主要功能頁面列為我們的導覽項目，依功能頁面使用頻率高低將其排序，靠近中間為使用率高，外側為使用率低。導覽項目由左至右為「列車動態」、「我的車票」、「線上訂票」、「付款/取票」、「會員」
                                </div>
                            </div>
                            <Image
                                src="/Railway/導覽體系.png"
                                alt="導覽體系"
                                width={500}
                                height={300}
                                className="shadow-md w-full"
                            />
                        </div>
                        <div
                            id="step3"
                            className="flex flex-col gap-4 scroll-mt-20 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl"
                        >
                            <div className="text-3xl font-bold">3. 介面流程 </div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                我們挑選出使用者在使用台鐵e訂通時，最重要的三個用例是：訂票、付款以及取票。
                            </div>
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="text-xl font-bold text-red-700">
                                    用例一：使用者可以依據需求快速訂到需要搭乘的列車
                                </div>
                                <div className="border-l-2 border-black pl-4">
                                    訂票頁面可讓使用者快速篩選想要的車次時間與車種，並於過程中給予即時回饋訊息，最後順利選定車次以及加購便當。
                                </div>
                                <Image
                                    src="/Railway/訂票.png"
                                    alt="persona"
                                    width={500}
                                    height={300}
                                    className="shadow-md w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="text-xl font-bold text-red-700">
                                    用例二：讓使用者能夠確認優惠及付款方式來完成支付
                                </div>
                                <div className="border-l-2 border-black pl-4">
                                    接續用例一，選擇付款，檢查是否有優惠可使用以及付款方式，並付款成功。
                                </div>
                                <Image
                                    src="/Railway/付款.png"
                                    alt="persona"
                                    width={500}
                                    height={300}
                                    className="shadow-md w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="text-xl font-bold text-red-700">
                                    用例三：讓使用者可以快速將車票儲存到手機裝置中，於搭乘時使用
                                </div>
                                <div className="border-l-2 border-black pl-4">
                                    接續用例二，選擇取票方式，並且可察看車票詳情及生成電子車票。
                                </div>
                                <Image
                                    src="/Railway/取票.png"
                                    alt="persona"
                                    width={500}
                                    height={300}
                                    className="shadow-md w-full"
                                />
                            </div>
                        </div>
                        <div
                            id="step4"
                            className="flex flex-col gap-4 scroll-mt-20 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl"
                        >
                            <div className="text-3xl font-bold">4. 易用性測試 </div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                我們透過設計操作情境腳本，讓使用者進行易用性測試，並請他們給予回饋
                            </div>
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="text-xl font-bold text-red-700">腳本撰寫</div>
                                <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                    設定明確目標與情境，讓使用者能夠快速完成任務，並且在過程中觀察使用者的操作行為
                                </div>
                                <Image
                                    src="/Railway/測試腳本.png"
                                    alt="測試腳本"
                                    width={500}
                                    height={300}
                                    className="shadow-md w-full"
                                />{' '}
                            </div>
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="text-xl font-bold text-red-700">易用性測試回饋與迭代</div>
                                <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                    於過程中觀察使用者操作狀況，並了解他們的使用習慣，以此來改善系統的易用性
                                </div>
                                <Image
                                    src="/Railway/回饋與迭代.png"
                                    alt="回饋與迭代"
                                    width={500}
                                    height={300}
                                    className="shadow-md w-full"
                                />
                            </div>
                        </div>
                        <div
                            id="step5"
                            className="flex flex-col gap-8 scroll-mt-20 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl"
                        >
                            <div className="text-3xl font-bold">5. 品牌形象 </div>
                            <div className="text-xl font-bold text-red-700">台鐵e訂通品牌形象</div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                台鐵e訂通是一款可以方便使用者快速線上購票及取票的App，因此我們想將系統打造成具有「好相處、在地的、效率」這三個特質
                                <ul className="ml-6 list-disc gap-2 flex flex-col">
                                    <li>
                                        要能夠讓使用者迅速完成訂票流程，著重提供高效率的操作過程，也確保結果能夠及時明確地回饋給使用者
                                    </li>
                                    <li>
                                        同時，在流程中加入人性化設計，像是友善的提示和導引，提供即時的幫助和支援功能，讓使用者感受到台鐵品牌的人情味和關懷
                                    </li>
                                    <li>
                                        最後，在設計風格和介面上帶入具有地方特色的元素，讓使用者感受到APP服務親切溫暖
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center md:flex-row gap-4 md:gap-1">
                                <Image
                                    src="/Railway/關鍵字分析.png"
                                    alt="persona"
                                    width={500}
                                    height={300}
                                    className="shadow-md md:w-1/2 h-2/3"
                                />
                                <Image
                                    src="/Railway/情緒版.png"
                                    alt="persona"
                                    width={500}
                                    height={300}
                                    className="md:w-1/2 shadow-md"
                                />
                            </div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                <ul className="ml-6 list-disc gap-2 flex flex-col">
                                    <li>
                                        <div className="font-bold">顏色：</div>
                                        整理從關鍵字衍伸出的圖片擷取顏色，選用展現出專業俐落的藍色作為主題色，並搭配暖色、有活力的橘色來做為重點提示或是icon，給予使用者不失親和力的具專業感服務
                                    </li>
                                    <li>
                                        {' '}
                                        <div className="font-bold">字體：</div>
                                        選用無襯線的思源黑體，呈現簡約俐落風格
                                    </li>
                                    <li>
                                        <div className="font-bold">特色：</div>
                                        增加邊界的圓弧感，並且多增加橘色於與使用者互動之處，以此增添好相處、親切的感覺
                                    </li>
                                </ul>
                            </div>
                            <Image
                                src="/Railway/UI風格.png"
                                alt="persona"
                                width={500}
                                height={300}
                                className="w-full shadow-md"
                            />
                        </div>
                        <div
                            id="step6"
                            className="w-full flex flex-col gap-4 scroll-mt-20 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl"
                        >
                            <div className="text-3xl font-bold">6. UI設計 </div>
                            <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                根據測試結果迭代原型設計，以下說明主要流程
                            </div>
                            <div className="flex flex-col md:flex-row  w-full  md:justify-between md:items-center mb-12 ">
                                <div className="flex flex-col gap-4 md:w-2/5">
                                    <div className="text-xl font-bold text-red-700">01 訂票</div>
                                    <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                        <ul className="ml-6 list-disc  flex flex-col">
                                            <li>重要必選選項以主題色凸顯 </li>
                                            <li>放大重點資訊</li>
                                            <li>提供完整清楚的資訊</li>
                                        </ul>
                                    </div>
                                </div>
                                <Image
                                    src="/Railway/訂票UI.png"
                                    alt="訂票"
                                    width={500}
                                    height={300}
                                    className="md:w-3/5"
                                />
                            </div>

                            <div className="flex flex-col-reverse md:flex-row  w-full justify-between md:items-center gap-4 mb-12">
                                <Image
                                    src="/Railway/付款UI.png"
                                    alt="付款"
                                    width={500}
                                    height={300}
                                    className="md:w-3/5 "
                                />
                                <div className="flex flex-col gap-4 md:w-2/5">
                                    <div className="text-xl font-bold text-red-700">02 付款</div>
                                    <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                        <ul className="ml-6 list-disc  flex flex-col">
                                            <li>重點資訊以顏色或大小來凸顯</li>
                                            <li>資訊呈現清楚排列</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row  w-full justify-between md:items-center ">
                                <div className="flex flex-col gap-4 md:w-2/5">
                                    <div className="text-xl font-bold text-red-700">03 取票</div>
                                    <div className="border-l-2 border-black pl-4 gap-4 flex flex-col">
                                        <ul className="ml-6 list-disc  flex flex-col">
                                            <li>取票資訊清楚明瞭</li>
                                            <li>點擊即可查看車票行經站點</li>
                                        </ul>
                                    </div>
                                </div>
                                <Image
                                    src="/Railway/取票UI.png"
                                    alt="取票"
                                    width={500}
                                    height={300}
                                    className="md:w-3/5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 海報論文 POSTER */}
                <div id="poster" className="px-4 scroll-mt-20 2xl:px-96 md:px-60">
                    <div className="m-8 text-3xl font-bold">海報論文 POSTER</div>

                    <div className="flex flex-col items-start justify-center w-full gap-4 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl">
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/Railway/期末Poster.png"
                                alt="old_home"
                                width={500}
                                height={100}
                                className="w-full shadow-md"
                            />
                        </div>
                    </div>
                </div>
                {/* 學習 LEARNING */}
                <div id="learning" className="px-4 scroll-mt-20 2xl:px-96 md:px-60">
                    <div className="m-8 text-3xl font-bold">學習 LEARNING</div>

                    <div className="flex flex-col items-start justify-center w-full gap-4 p-4 bg-white border-b-8 border-black md:p-10 border-5 rounded-xl">
                        <div className="text-2xl font-bold">
                            Redesign 需重新深入思考使用者的行為，並非只有介面的優化。
                        </div>
                        <div className="border-l-2 border-black pl-4">
                            原本的台鐵e訂通在初次上手時，使用者會發現介面過於繁雜，且訂票流程不夠直覺，因此我們透過訪談了解使用者的操作習慣及需求，然後一一分析、拆解，進而組織成一套新的資訊架構，再搭配品牌形象的再建立，重新設計介面，讓使用者能夠更快速地完成訂票流程。
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
