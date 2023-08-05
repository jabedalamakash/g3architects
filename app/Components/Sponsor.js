import Image from 'next/image';
import React from 'react';

const Sponsor = () => {
    return (
        <div className=' w-[85%] mx-auto my-20'>
            <h1 className='text-5xl font-bold text-center m-10'>Our Sponspors</h1>

            <p className='text-xl font-thin text-center sm:w-[30%] mx-auto mb-14'>There are many variations of passages of Lorem Ipsum available, butthe majority have suffered alteration.</p>
                <div className='flex flex-col justify-center items-center  sm:flex-row mx-auto sm:justify-between'>
                    <Image
                    src={"/images/sponsors/spotify.png"}
                    height={100}
                    width={150}
                    alt="spotify"
                    className='mb-10 sm:mb-0'

                    
                    />
                      <Image
                    src={"/images/sponsors/amazon.png"}
                    height={100}
                    width={150}
                    alt="spotify"
                    className='mb-10 sm:mb-0'
                    />

                      <Image
                    src={"/images/sponsors/google.png"}
                    height={100}
                    width={150}
                    alt="spotify"
                    className='mb-10 sm:mb-0'
                    />

                    <Image
                    src={"/images/sponsors/telerama.png"}
                    height={100}
                    width={150}
                    alt="spotify"
                    className='mb-10 sm:mb-0'
                    />

                    <Image
                    src={"/images/sponsors/figma.png"}
                    height={100}
                    width={150}
                    alt="spotify"
                    className=''
                    />




                </div>
        </div>
    );
};

export default Sponsor;