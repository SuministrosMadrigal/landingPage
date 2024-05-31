import React from 'react'
import { motion } from "framer-motion";

const SectionSolucionesTecnologicas = () => {
    return (
        <div className='bg-[#1D5E9D] relative w-full h-fit '>
            <div className='mx-auto w-fit flex items-center'>
                <div className='md:w-[30px] w-[15px] h-[15px] md:h-[30px] mr-5 md:mr-10 rounded-full bg-white' />
                <h2 className='text-white text-[20px] md:text-[83px] font-bold uppercase'>
                    Soluciones tecnológicas
                </h2>
            </div>

            <div className='flex items-center'>

                <div className='ml-[9%] py-10 space-y-5'>
                    <h4 className='md:text-[28px] text-[12px] text-white'>
                        Nos dedicamos a proporcionar tecnología de última generación para satisfacer todas las necesidades de su empresa.
                    </h4>
                    <h4 className='md:text-[28px] text-[12px] text-white'>
                        Ofrecemos una amplia gama de equipos, desde servidores robustos hasta laptops y computadoras de alto rendimiento, trabajando con marcas líderes como Dell y otras reconocidas en la industria.
                    </h4>

                    <h4 className='md:text-[28px] text-[12px] text-white'>
                        Con nuestra experiencia en tecnología, nos comprometemos a brindar soluciones personalizadas que se adapten a las necesidades específicas de su negocio. Confíe en nosotros para equipar su empresa con tecnología de primera calidad y mantenerse a la vanguardia en un mundo digital en constante evolución..
                    </h4>
                </div>

                <motion.img 
                initial={{
                    opacity:0,
                    translateX:200
                }}
                whileInView={{
                    opacity:1,
                    translateX:0
                }}
                transition={{
                    duration:0.7
                }}
                src='./laptop.webp' className='w-[30%] md:w-full' />


            </div>

        </div>
    )
}

export default SectionSolucionesTecnologicas
