import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div>
                <div className="flex w-100 bg-gray-100 justify-around items-center h-10 text-black">
                    <ul className="flex w-100 bg-gray-100 justify-around items-center h-10 text-black">
                        <li>
                            <Link to="/home" className='px-3'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='px-3'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='px-3'>Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex w-100 bg-gray-100 justify-around items-center h-10 text-black">
                        <li>
                            <Link to="/home" className='px-3'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='px-3'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='px-3'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;