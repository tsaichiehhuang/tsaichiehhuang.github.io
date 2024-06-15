// components/VerticalNav.js
import { useState, useEffect } from 'react'

const sections = [
    { id: 'overview', label: '總覽' },
    { id: 'purpose', label: '目的', parent: 'overview' },
    { id: 'requirements', label: '需求', parent: 'overview' },
    { id: 'prototype', label: '原型', parent: 'overview' },
    { id: 'problems', label: '問題' },
    { id: 'process', label: '設計過程' },
    { id: 'step1', label: '1. 了解訂票行為', parent: 'process' },
    { id: 'step2', label: '2. 資訊架構', parent: 'process' },
    { id: 'step3', label: '3. 介面流程', parent: 'process' },
    { id: 'step4', label: '4. 任務測試', parent: 'process' },
    { id: 'step5', label: '5. 品牌形象', parent: 'process' },
    { id: 'step6', label: '6. UI設計', parent: 'process' },
    { id: 'poster', label: '海報論文' },
    { id: 'learning', label: '學習' },
]

const VerticalNav = () => {
    const [activeSection, setActiveSection] = useState('')
    const [showNav, setShowNav] = useState(false)

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

            const overviewElement = document.getElementById('overview')
            if (overviewElement) {
                setShowNav(window.scrollY >= overviewElement.offsetTop - 200)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav
            className={`hidden lg:flex fixed top-1/3 left-2 h-1/2 w-36  flex-col text-xs gap-1 items-start text-gray-700 transition-opacity duration-300 ${
                showNav ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={` pl-2 w-full hover:text-red-700 ${activeSection === section.id ? 'text-red-700' : ''} ${
                        section.parent ? 'pl-4' : ''
                    }`}
                >
                    {section.label}
                </a>
            ))}
        </nav>
    )
}

export default VerticalNav
