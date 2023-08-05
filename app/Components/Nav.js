import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
       
        <main  className='bg-[#FFF4E7] mx-auto p-10 sm:p-20'>
             <div className='text-black flex  flex-col container mx-auto sm:px-20 justify-between items-center sm:flex-row'>
                <div className='text-5xl pb-10 sm:pb-0  font-bold'>
                    <Link href='/' className=''>G3 Architects</Link>
                    </div>

                <div className=' flex-col justify-evenly  '>

                    <nav className=' text-black font-bold text-xl '>
                      
                        <Link href='/' className='mr-4'>Home</Link>
                        <Link href='/' className='mr-4'>About</Link>
                        <Link href='/' className='mr-4'>Contact Us</Link>
                        <Link href='/' className=''>Log in</Link>
                       
                    </nav>
                </div>
            </div>

        </main>
           
        
    );
};

export default Nav;