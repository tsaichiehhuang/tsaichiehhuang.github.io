'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function Header() {
    const [activeSection, setActiveSection] = useState('')

    const sections = [
        { id: 'about-me', label: 'About Me' },
        { id: 'skills', label: 'Skills & Tools' },
        { id: 'experience', label: 'Experience' },
        { id: 'portfolio', label: 'Portfolio' },
    ]
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = ''
            sections.forEach((section) => {
                const element = document.getElementById(section.id)
                if (element && window.scrollY >= element.offsetTop - 200) {
                    currentSection = section.id
                }
            })
            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <Navbar isBlurred className="sticky bg-transparent" maxWidth="2xl" position="sticky">
            <NavbarBrand>
                <Link href="/" className="text-xl font-bold cursor-pointer text-inherit">
                    Kelly 黃采婕
                </Link>
                {/* <p className="text-xl font-bold text-inherit">Kelly 黃采婕</p> */}
            </NavbarBrand>
            <NavbarContent className="hidden gap-4 sm:flex" justify="end">
                {sections.map((section) => (
                    <NavbarItem key={section.id}>
                        <Link
                            href={`/#${section.id}`}
                            className={`p-2 font-bold  border-black rounded-lg border-3 border-b-5 ${
                                activeSection === section.id ? 'bg-red-700 text-white' : 'bg-white'
                            } `}
                        >
                            {section.label}
                        </Link>
                    </NavbarItem>
                ))}
                {/* <NavbarItem>
                    <Link
                        href="#about-me"
                        className="p-2 font-bold bg-white border-black rounded-lg border-3 border-b-5"
                    >
                        About Me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#skills" className="p-2 font-bold bg-white border-black rounded-lg border-3 border-b-5">
                        Skills & Tools
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        href="#experience"
                        className="p-2 font-bold bg-white border-black rounded-lg border-3 border-b-5"
                    >
                        Experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="#portfolio"
                        className="p-2 font-bold bg-white border-black rounded-lg border-3 border-b-5"
                    >
                        Portfolio
                    </Link>
                </NavbarItem> */}
            </NavbarContent>
        </Navbar>
    )
}
