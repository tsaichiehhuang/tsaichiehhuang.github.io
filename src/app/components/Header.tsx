import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
export default function Header() {
    return (
        <Navbar isBlurred className="sticky bg-transparent" position="sticky">
            <NavbarBrand>
                <p className="text-xl font-bold text-inherit">Kelly 黃采婕</p>
            </NavbarBrand>
            <NavbarContent className="hidden gap-4 sm:flex" justify="end">
                <NavbarItem>
                    <Link
                        href="#about-me"
                        className="p-2 font-bold bg-white border-black rounded-lg border-3 border-b-5"
                    >
                        About Me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#skills" className="p-2 font-bold bg-white border-black rounded-lg border-3 border-b-5">
                        Skills
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
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
