import React,{useState} from 'react'
import Image from 'next/image'
import { DateRangePicker } from 'react-date-range';
import {SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UserIcon
}from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Header() {

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGuest, setNumberOfGuest ] = useState(<i class="fas fa-repeat-1-alt    "></i>)
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }


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
                    value={searchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
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
            {searchInput &&(
                    <div className="flex flex-col col-span-3 mx-auto mt-2 shadow-md">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl px-5 flex-grow font-semibold">Number of Guests</h2>
                            <UserIcon className="h-5" />
                            <input 
                                type="number"
                                value={numberOfGuest}
                                min={1}
                                onChange={e=>setNumberOfGuest(e.target.value)} 
                                className="w-12 font-semibold pl-2 text-lg outline-none text-red-400" 
                            />
                        </div>
                        <div className="flex">
                            <button 
                                onClick={()=>(setSearchInput(''))} className="flex-grow text-gray-500">Cancel</button>
                            <button className="flex-grow text-red-500">Search</button>
                        </div>
                    </div>
                ) }
        </header>
    )
}

export default Header
