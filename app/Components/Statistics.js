import Image from 'next/image';
import React from 'react';

const Statistics = () => {
    return (
        <div className='w-[85%] mx-auto my-20'>

            <h1 className='text-5xl  text-center sm:text-left font-bold mb-10'>Some Facts</h1>
            <p className='mb-20 text-xl text-[#727272] text-center sm:text-left sm:w-[40%]'>There are many variations of passages of Lorem Ipsum available, butthe majority have suffered alteration.</p>

            <div className='flex flex-col sm:flex-row  justify-between mx-auto'>

                <div className=' text-center mb-10 sm:mb-0 box-border px-20 py-10 rounded bg-white border-2 border-[#FFD9AD]'>
                    
                    <Image
                    src={"/images/icons/ribon.png"}
                    height={50}
                    width={50}
                    alt="Ribon"
                    className='text-center mx-auto mb-2'
                    />
                    <h4 className='text-[#424242] text-3xl font-bold text-center'>54</h4>
                    <p className='text-[#727272] text-xl text-center'>Awards Winnings</p>
                </div>

                <div className='text-center  mb-10 sm:mb-0 px-20 py-10 rounded bg-white border-2 border-[#FFD9AD]'>
                    <Image
                    src={"/images/icons/projects.png"}
                    height={50}
                    width={50}
                    alt="Projects"
                    className='text-center mx-auto mb-2'
                    />
                    <h4 className='text-[#424242] text-3xl font-bold text-center'>1458</h4>

                    <p className='text-[#727272] text-center text-xl ' >Project Finished</p>
                </div>

                <div className='text-center  mb-10 sm:mb-0 px-20 py-10 rounded bg-white border-2 border-[#FFD9AD]'>
                    <Image
                    src={"/images/icons/customers.png"}
                    height={50}
                    width={50}
                    alt="Clients"
                    className='mb-2 text-center mx-auto'
                    />
                    <h4 className='text-[#424242] text-center text-3xl font-bold'>590</h4>

                    <p className='text-[#727272] text-center text-xl '>Clients Worked</p>
                </div>

                <div className='text-center  mb-10 sm:mb-0 px-20 py-10 rounded bg-white border-2 border-[#FFD9AD]'>
                <div>
                <Image
                    src={"/images/icons/email.png"}
                    height={50}
                    width={50}
                    alt="Ribon"
                    className='mb-2 mx-auto'
                    />
                    <h4 className='text-[#424242] text-center text-3xl font-bold'>22578</h4>

                    <p className='text-[#727272] text-center text-xl '>Email Send</p>
                        
                </div>
                   
                </div>



               
            </div>
        </div>
    );
};

export default Statistics;