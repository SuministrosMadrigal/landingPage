import React from 'react'
import { motion } from "framer-motion";

const SectionSuministros = () => {
    return (
        <div className='w-full h-fit md:h-fit flex justify-end bg-suministrosImg bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: "url('./suministrosImg.webp')"
            }}
        >
            <div className=' relative mt-20'>
                <div className='w-fit ml-auto'>
                    <div className='w-fit py-2 px-5 ml-auto md:px-3 rounded-l-full flex justify-center bg-[#0B78BB] '>
                        <h2 className='md:text-[5vw] text-[22px] uppercase font-bold text-white'>importacion de</h2>
                    </div>

                    <h2 className='text-[#0B78BB] uppercase text-[22px] pl-5 text-start md:text-[5vw] md:-translate-y-2 md:pl-5 font-bold'>suministros</h2>
                </div>


                <h3 className='text-end md:w-1/2 text-[#1D5E9D] text-[14px] py-8 px-5 grayscale-0 md:py-0 md:text-[2.5vw] ml-auto'>
                    Nos especializamos en la importación y suministro oportuno de una amplia gama de productos y materiales necesarios para proyectos industriales. Nuestra red logística nos permite garantizar la disponibilidad y calidad de los suministros, asegurando una gestión eficiente que cumple con las necesidades de nuestros clientes.
                </h3>

                <div className='w-full h-fit relative my-7 md:my-20 bottom-10 right-0 flex justify-end md:space-x-9 items-center'>
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: -200
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2
                        }}
                        src="./abb.webp" className='md:w-[110px] w-[40px] h-full md:h-[110px]' alt="" />
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: -200
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4
                        }}
                        src="./abexport.webp" className='md:w-[110px] w-[40px] h-full md:h-[110px]' alt="" />
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: -200
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.6
                        }}
                        src="./rockwell.webp" className='md:w-[190px] w-[70px] h-full md:h-[50px]' alt="" />
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: -200
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.8
                        }}
                        src="./schneider.webp" className='md:w-[150px] w-[90px] h-full md:h-[110px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionSuministros
