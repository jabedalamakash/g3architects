import Image from 'next/image';
import React from 'react';

const Feature = () => {
    return (
        <main className='w-[85%] mx-auto'>
             <div className=' flex flex-col items-center sm:flex-row relative mx-auto'>
                    <div className='sm:w-1/2 w-full mx-auto mr-32'>
                        <h1 className='sm:border-l-4 text-center sm:text-left sm:text-left sm:border-[#FF900E] text-5xl sm:w-[60%] -tracking-normal p-3 mb-10 font-bold'>Features you will love & enjoy</h1>
                        <p className='mb-10 text-center sm:text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>


                        <div className='ml-5 sm:ml-0'>

                        <div className='shadow-md p-5 mb-10 '>
                            <h4 className='text-2xl font-semibold mb-5'>Dexktop & Mobile Version</h4>

                            <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                        </div>

                <div className='shadow-md p-5 mb-10'>
                    <h4 className='text-2xl font-semibold  mb-5'>Drag & Drop Builder</h4>

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>

                <div className='shadow-md p-5 mb-10'>
                    <h4 className='text-2xl font-semibold d mb-5'> Awesome Modern Design</h4>

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>

                <div className='shadow-md p-5 '>
                    <h4 className='text-2xl font-semibold  mb-5'>Super Easy to Edit</h4>

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>

               </div>

                        
            </div>


            <div className='sm:w-1/2'>
                <Image
                src={"/images/architect.png"}
                height={1200}
                width={708}
                alt="architect"
                className='relative'
                />
            </div>
            
        </div>

        <div className='px-10 py-14 mt-10 w-full sm:w-[15%] sm:absolute left-0 right-0  flex-col justify-center sm:mt-[-110px] mx-auto rounded text-center bg-[#FF900E] text-white'>
            <h4 className='font-extrabold text-5xl'>10+ Years</h4>
            <p className='font-semibold text-xl'>Experience</p>

        

        </div>


        </main>
    );
       
       
};

export default Feature;