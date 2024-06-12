export default function Experience() {
    const workData = [
        {
            company: '台北儀錶板黑客松 - 決賽',
            title: '',
            startDate: '2023/11',
            endDate: '',
            description: ['用 Vue.js加上主辦方規定的套件，在24小時內開發指定主題的儀表板圖表及地圖視覺化'],
        },
        {
            company: '國立政治大學',
            title: ' 數位內容碩士學位學程',
            startDate: '2023/9',
            endDate: '- 2025/6',
            description: ['進入軟體工程實驗室做前端相關研究', '人機互動設計'],
        },
        {
            company: 'AppWorks School',
            title: '- Frontend Trainee',
            startDate: '2023/7',
            endDate: '- 2023/8',
            description: [
                "Next.js 完成前後端協作專案：① 社群媒體 'CanChu' ② 即時訂位訂餐系統'食時好'",
                'API串接以及custom hook',
            ],
        },
        {
            company: 'Coding101 競賽 - 第三名',
            title: '',
            startDate: '2023/1',
            endDate: '- 2023/3',
            description: ['使用React.js開發量化交易策略平台', '兼任UI UX 設計'],
        },
        {
            company: '遠傳電信',
            title: '- Frontend Intern',
            startDate: '2022/9',
            endDate: '- 2023/6',
            description: ['使用Vue.js 開發商情數據平台開發', '前後端API串接', 'Git 團隊開發'],
        },
        {
            company: '國立臺灣師範大學',
            title: ' 企業管理學系',
            startDate: '2018/9',
            endDate: '- 2023/6',
            description: [
                '完成金融科技專案：用市場情緒指標結合股價指數來預測基金交易量',
                '學習 Python 數據分析、MySQL 資料庫管理',
                '學習前端相關技術 HTML、CSS、JS、React.js',
                '學習 UIUX設計、Figma',
            ],
        },
    ]
    return (
        <div className="overflow-x-hidden bg-white " data-aos="fade-up" data-aos-offset="200">
            <div className="py-16 text-3xl font-bold text-center ">Experience</div>
            <div className="flex flex-col items-center w-full md:grid md:grid-flow-row md:grid-cols-4 md:px-48">
                {workData.map((item, index) => (
                    <div
                        key={index}
                        className={`md:w-full w-4/5 flex  md:grid  col-span-4 md:gap-4 grid-cols-subgrid ${
                            index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3 md:ml-2'
                        }`}
                        data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
                    >
                        <div className="col-span-2 ">
                            <WorkExperience
                                company={item.company}
                                title={item.title}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                description={item.description}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div id="portfolio"></div>
        </div>
    )
}
interface WorkExperienceProps {
    company: string
    title: string
    startDate: string
    endDate: string
    description: string[]
}
const WorkExperience = (props: WorkExperienceProps) => {
    const { title, company, startDate, endDate, description } = props
    return (
        <div className="z-20 p-4 mb-8 text-left border-b-8 border-black rounded-xl border-5">
            <div className="flex flex-col items-start p-2 text-left">
                <h2 className="text-lg font-bold">
                    {company}
                    {title}
                </h2>
                <p className="text-xs text-gray-600 ">
                    {startDate} {endDate}
                </p>
            </div>
            <div className="p-4">
                <ul className="mt-2 list-disc list-inside">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
