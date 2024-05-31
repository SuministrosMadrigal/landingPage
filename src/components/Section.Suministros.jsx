import React from 'react'
import { motion } from "framer-motion";

const SectionSuministros = () => {
    return (
        <div className='w-full h-[70vh] md:h-[120vh] flex justify-end bg-suministrosImg md:pr-10 bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: "url('./suministrosImg.webp')"
            }}
        >
            <div className='md:w-1/2 w-full relative mt-20'>
                <div className='md:w-full w-[60%] py-2 px-5 ml-auto md:px-3 rounded-l-full flex justify-center bg-[#0B78BB] '>
                    <h2 className='md:text-[83px] text-[22px] uppercase font-bold text-white'>importacion de</h2>
                </div>

                <h2 className='text-[#0B78BB] uppercase text-[22px] text-end md:text-[83px] md:-translate-y-6 md:pl-5 pr-[17%] font-bold'>suministros</h2>

                <h3 className='text-end md:max-w-[40vw] text-[#1D5E9D] text-[14px] py-8 px-5 grayscale-0 md:py-0 md:text-[32px] ml-auto'>
                    Nos especializamos en la importación y suministro oportuno de una amplia gama de productos y materiales necesarios para proyectos industriales. Nuestra red logística nos permite garantizar la disponibilidad y calidad de los suministros, asegurando una gestión eficiente que cumple con las necesidades de nuestros clientes.
                </h3>

                <div className='w-full h-fit absolute bottom-10 right-0 flex justify-end md:space-x-9 items-center'>
                    <motion.img
                    initial={{
                        opacity:0,
                        translateX:-200
                    }}
                    whileInView={{
                        opacity:1,
                        translateX:0
                    }}
                    transition={{duration:0.7,
                        delay:0.2
                    }}
                    src="./abb.webp" className='md:w-[110px] w-1/4 h-full md:h-[110px]' alt="" />
                    <motion.img
                    initial={{
                        opacity:0,
                        translateX:-200
                    }}
                    whileInView={{
                        opacity:1,
                        translateX:0
                    }}
                    transition={{duration:0.7,
                        delay:0.4
                    }}
                    src="./abexport.webp" className='md:w-[110px] w-1/4 h-full md:h-[110px]' alt="" />
                    <motion.img
                    initial={{
                        opacity:0,
                        translateX:-200
                    }}
                    whileInView={{
                        opacity:1,
                        translateX:0
                    }}
                    transition={{duration:0.7,
                        delay:0.6
                    }}
                    src="./rockwell.webp" className='md:w-[190px] w-1/4 h-full md:h-[50px]' alt="" />
                    <motion.img
                    initial={{
                        opacity:0,
                        translateX:-200
                    }}
                    whileInView={{
                        opacity:1,
                        translateX:0
                    }}
                    transition={{duration:0.7,
                        delay:0.8
                    }}
                    src="./schneider.webp" className='md:w-[150px] w-1/4 h-full md:h-[110px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionSuministros
