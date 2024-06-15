import AboutMe from '@/app/components/AboutMe'
import UXSkills from '@/app/components/UXSkills'
import Header from '@/app/components/Header'
import Banner from '@/app/components/Banner'
import dynamic from 'next/dynamic'
const Experience = dynamic(() => import('@/app/components/Experience'))
const UXPortfolio = dynamic(() => import('@/app/components/UXPortfolio'))

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <main className="flex flex-col items-center justify-center gap-40 pb-20 text-center ">
                <Banner />

                <AboutMe />
                <UXSkills />
                <Experience />
                <UXPortfolio />
            </main>
            <footer className="w-full py-8 text-white bg-gray-800">
                <div className="container px-4  text-center">
                    <p>&copy; {new Date().getFullYear()} Kelly 黃采婕. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
