import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className=' flex  justify-around items-center'>
            <ul className=''>
                <li className='my-2'>
                    <Link to="home">Home</Link></li>
                <li className='my-2'>link</li>
                <li className='my-2'>
                    <Link to="about">About</Link></li>
            </ul>
            <ul>
                <li className='my-2'>Company</li>
                <li className='my-2'>Support</li>
                <li className='my-2'>Helpghjfffffffffff</li>
            </ul>
            <ul>
                <li className='my-2'>Facebook</li>
                <li className='my-2'>Instagram</li>
                <li className='my-2'>Twiter</li>
            </ul>
        </footer>
    </>
  )
}

export default Footer