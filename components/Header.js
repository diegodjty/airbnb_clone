import React from 'react'
import Image from 'next/image'
import {SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UserIcon
}from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 
        bg-white shadow-md py-5 px-5 md:px-10">

            <div className="relative flex items-center h-10 cursor-pointer
             my-auto" >
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"

                />
            </div>


            <div className="flex items-center rounded-full py-2
            md:border-2 md:shadow-sm">
                <input 
                    type="text" 
                    placeholder="start your search"  
                    className="pl-5 bg-transparent outline-none flex-grow text-sm 
                    text-gray-600 placeholder-gray-400"
                 />
                <SearchIcon 
                    className=" hidden h-8 bg-red-400 text-white
                    rounded-full p-2 cursor-pointer md:inline-flex md: mx-2 "
                />
            </div>

            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden cursor-pointer md:inline">Become a host</p>
                <GlobeAltIcon className=" h-6 "/>

                <div className="flex items-center border-2 p-2 rounded-full
                     cursor-pointer"
                >
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
