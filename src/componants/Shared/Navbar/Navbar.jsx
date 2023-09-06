import { Container } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-md'>
            <div className='py-4 border-b-[1px]'>
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <div>
                            <Link to="/">
                            <img src="/public/favicon.png" className='w-8 cursor-pointer hidden md:block' alt="" />
                            </Link>
                        </div>
                        <Search/>
                        <div>Menu</div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Navbar;