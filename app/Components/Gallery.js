import React from 'react';
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className='flex sm:flex-row flex-col items-center mx-auto w-[85%] '>
            <div className='flex flex-wrap p-5 sm:p-10'>
            <Image
                src={"/images/team1.png"}
                height={800}
                width={1000}
                alt=""
                className='text-center p-5  w-1/2 '/>

                 <Image
                src={"/images/team2.png"}
                height={800}
                width={1000}
                alt=""
                className='text-center p-5 w-1/2 '/>

                 <Image
                src={"/images/team3.png"}
                height={800}
                width={1000}
                alt=""
                className='text-center  p-5 w-1/2 '/>


                 <Image
                src={"/images/team4.png"}
                height={800}
                width={1000}
                alt=""
                className='text-center p-5 w-1/2 '/>


            </div>
            <div className='p-5 sm:p-10 text-center sm:text-left'>
            <h1  className='text-[#727272] text-4xl font-medium  mb-5 '>Quick list <span className='text-black font-bold text-4xl'>of Our </span><span className='font-bold text-4xl text-[#FF900E]'>Features</span></h1>

            <p  className='text-xl text-[#727272] font-thin sm:pr-5 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
            <button className='px-3 py-4 text-xl font-bold bg-[#FF900E] text-white rounded' >Explore More</button>




            </div>
        </div>
    );
};

export default Gallery;