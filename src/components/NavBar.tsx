import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const NavBar = () => {
    const [toggleOn, setToggleOn] = useState(true);

    const onToggleClick = () => {
        setToggleOn(!toggleOn)
    }

    return (
        <nav className='top-0 left-0 bg-white w-full shadow'>
            <div className='container m-auto flex justify-between items-center text-gray-700'>
                <h1 className='pl-16 py-4 text-2xl font-bold'>JSON GUI EDITOR</h1>
                <ul className='md:flex hidden pr-10 font-semibold'>
                    <li className='hover:bg-gray-200 py-4 px-6'>Home</li>
                    <li className='hover:bg-gray-200 py-4 px-6'>Contact</li>
                    <li className='hover:bg-gray-200 py-4 px-6'>About</li>
                </ul>
                <button className={`flex mr-10 md:hidden items-center justify-center w-9 h-9 hover:bg-gray-100 rounded ring-slate-300 ${toggleOn && 'ring-4'}`} onClick={onToggleClick}>
                    <Bars3Icon className='w-7'/>
                </button>
            </div>
            {toggleOn && <div className='flex justify-center px-6 py-6 bg-gray-100'>
                <ul className='md:hidden flex flex-col font-semibold w-full px-10'>
                    <li className='hover:bg-gray-200 py-4 text-center border-b-2'>Home</li>
                    <li className='hover:bg-gray-200 py-4 text-center border-b-2'>Contact</li>
                    <li className='hover:bg-gray-200 py-4 text-center border-b-2'>About</li>
                </ul>
            </div>}
        </nav>
    )
}

export default NavBar;