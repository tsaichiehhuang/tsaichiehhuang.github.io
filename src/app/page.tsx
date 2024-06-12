import AboutMe from '@/app/components/AboutMe'
import Skills from '@/app/components/Skills'
import Header from '@/app/components/Header'
import Banner from '@/app/components/Banner'
import dynamic from 'next/dynamic'
const Experience = dynamic(() => import('@/app/components/Experience'))
const Portfolio = dynamic(() => import('@/app/components/Portfolio'))

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <main className="container  pb-20 text-center ">
                <Banner />
                <AboutMe />
                <Skills />
                <Experience />
                <Portfolio />
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
