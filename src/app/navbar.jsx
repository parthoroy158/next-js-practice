import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center mt-2'>
            <ul className='bg-emerald-400 rounded p-1  flex gap-5 ' >
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <Link href='/about'>
                    <li>About Us</li>
                </Link>
                <Link href='/services'>
                    <li>Services</li>
                </Link>
                <Link href='/login'>
                    <li>Log In</li>
                </Link>
               
            </ul>
        </div>
    );
};

export default Navbar;