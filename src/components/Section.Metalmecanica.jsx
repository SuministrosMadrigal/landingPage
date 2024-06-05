import React from 'react'
import { motion } from "framer-motion";

const SectionMetalmecanica = () => {
    return (
        <div className='w-full h-fit flex justify-center flex-col py-24 bg-metalm bg-center bg-cover bg-no-repeat bg-[#1D5E9D] px-10 md:px-20'
            style={{
                backgroundImage: "url('./metalm.webp')"
            }}
        >

            <motion.div 
            initial={{
                opacity:0.2,
                translateX: -200
            }}
            whileInView={{
                opacity:1,
                translateX:0
            }}
            transition={{
                duration:0.7
            }}
            className='flex items-center space-x-5'>
                <div className='md:w-7 md:h-7 w-4 h-4 rounded-full bg-white '>

                </div>
                <h2 className='md:text-[5vw] text-[32px] text-white font-bold'>METALMECÁNICA</h2>

            </motion.div>

            <motion.p 
            initial={{
                opacity:0.2,
                translateX: -200
            }}
            whileInView={{
                opacity:1,
                translateX:0
            }}
            transition={{
                duration:0.9
            }}
            className='md:w-[55%] w-[80%] mt-20 text-[18px] md:text-[2.5vw] text-white font-light'>
                Ofrecemos soluciones integrales en metalmecánica, destacándonos por nuestra experiencia en el diseño y fabricación de componentes metálicos de alta precisión para una amplia gama de industrias. Nuestro compromiso con la calidad y la innovación nos permite satisfacer las necesidades más exigentes de nuestros clientes, garantizando la excelencia en cada proyecto.
            </motion.p>
        </div>
    )
}

export default SectionMetalmecanica
