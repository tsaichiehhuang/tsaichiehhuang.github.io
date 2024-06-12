import Image from 'next/image'

export default function Banner() {
    return (
        <div className="overflow-x-hidden">
            <div className=" md:py-0 py-8 md:items-baseline items-center justify-center flex md:grid grid-cols-12 grid-rows-5  flex-col md:flex-row w-full h-[800px] md:h-screen max-w-screen ">
                <div className="z-10 flex flex-col col-span-6 col-start-2 col-end-13 row-start-2 gap-8 text-3xl font-bold text-left md:col-start-6 md:row-start-3 md:gap-4 md:text-5xl align-center">
                    <div>Hi, I&apos;m Kelly 黃采婕</div>
                    <div className="flex flex-row gap-4">
                        a
                        <div className="p-2 text-white bg-red-700 border-b-8 border-black rounded-xl border-5">
                            Frontend Developer
                        </div>
                    </div>
                </div>
                <div className="z-0 hidden w-20 h-20 col-start-1 col-end-5 row-start-1 mt-10 ml-20 rounded-full md:block from-yellow-300 to-yellow-400 bg-gradient-to-br"></div>
                <div className="z-0 hidden col-start-2 col-end-5 row-start-2 m-4 rounded-full md:block from-yellow-300 to-yellow-400 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br"></div>
                <Image
                    src="/illustration.png"
                    alt="illustration"
                    width={300}
                    height={600}
                    quality={100}
                    priority={true}
                    className="z-10 col-start-3 col-end-13 row-start-4 mt-10 md:col-start-2 md:col-end-5 md:row-start-2 md:mt-0"
                />
            </div>
            <div id="about-me"></div>
        </div>
    )
}
