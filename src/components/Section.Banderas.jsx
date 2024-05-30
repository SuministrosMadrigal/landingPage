import React from 'react'

const SectionBanderas = () => {
    return (
        <div className='w-full relative md:px-20 px-10 pt-10 h-fit md:pt-20 flex items-center justify-start'>
            <div className='flex md:justify-start justify-center items-center space-x-4'>
                <img className='md:w-20 md:h-20 w-14 h-14' src="./vzla.webp" alt="" />
                <img className='md:w-20 md:h-20 w-14 h-14' src="./euro.webp" alt="" />
                <img className='md:w-20 md:h-20 w-14 h-14' src="./usa.webp" alt="" />
                <img className='md:w-20 md:h-20 w-14 h-14' src="./panama.webp" alt="" />
            </div>

            <img src='./logo.webp' className='md:w-[750px] md:h-[300px] absolute top-28  right-0 md:top-48 md:right-10' />
        </div>
    )
}

export default SectionBanderas
