import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <main className='bg-[#FFF4E7] mb-10 sm:mb-20'>
             <div className=' w-[85%] mx-auto text-center'>
                <h1 className='sm:text-7xl text-3xl font-semibold mx-auto mb-10'>Brand New <br/>Group of Architects</h1>
                <p  className='md:w-[50%] text-xl font-thin mx-auto  mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration insome form, by injected humour, or randomised words which don't look even.</p>
                <button className='bg-[#FF900E] text-xl text-white font-bold px-4 py-5 mb-10 rounded'>Explore More</button>
                <Image
                src={"/images/banner.png"}
                height={800}
                width={1000}
                alt=""
               
                className='text-center py-16 sm:w-full w-[100%] '

                
                />
            
            </div>
        </main>
       
    );
};

export default Hero;