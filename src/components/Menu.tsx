"use client"
import Link from "next/link"
import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

const Menu = () => {
    const [Open, setOpen] = useState(false)
    return (
        <div className=''>
            <Bars3Icon className="cursor-pointer w-8 h-8" onClick={() => setOpen(prev => !prev)} />{
                Open && (
                    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 ">
                        <Link href="/">Home</Link>
                        <Link href="/">Men</Link>
                        <Link href="/">Women</Link>
                        <Link href="/">Kids</Link>
                        <Link href="/">Customize</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Logout</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu