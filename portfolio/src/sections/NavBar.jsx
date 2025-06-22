import { useState } from "react"
import {navLinks} from "../constants/index.js"

const NavItems = ({isMobile})=>{
    return (
        <ul className={`nav-ul flex gap-8 ${isMobile?"flex-col":"flex-row"} items-center justify-center`}>
            {navLinks.map((data)=>{
                return (
                    <li key={data.id} className="nav-li">
                        <a href={data.href} className="nav-li_a">{data.name}</a> 
                    </li>
                )
            })}
        </ul>
    )
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed left-0 top-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Abhishek
                    </a>
                    <button onClick={()=> setIsOpen(!isOpen)} className="sm:hidden text-neutral-400 hover:text-white focus:outline-none" arial-label="toggle menu">
                        <img src={isOpen?"assets/close.svg":"assets/menu.svg"} alt="toggle button" className="w-6 h-6"/>
                    </button>

                    <nav className="sm:flex hidden"><NavItems isMobile={false}/></nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen?"max-h-screen flex":"max-h-0 hidden"}`}>
                <nav className="p-5"><NavItems isMobile={true}/></nav>
            </div>
        </header>
    )
};
