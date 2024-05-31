import React from 'react'
import { motion } from "framer-motion";

const SERVICIO_DATA = [
    {
        icon: "./s1.webp",
        titulo: "METALMECÁNICA",
    },
    {
        icon: "./s2.webp",
        titulo: "INSTRUMENTACIÓN",
    },
    {
        icon: "./s3.webp",
        titulo: "ELECTRÓNICA",
    },
    {
        icon: "./s4.webp",
        titulo: "ELECTRICIDAD",
    },
    {
        icon: "./s5.webp",
        titulo: "LÁMPARAS INDUSTRIALES",
    },
    {
        icon: "./s6.webp",
        titulo: "IMPORTACIÓN DE SUMINISTROS",
    },
    {
        icon: "./s7.webp",
        titulo: "Tecnología IoT",
    },
    {
        icon: "./s8.webp",
        titulo: "Grúas Grove y Konecranes",
    },
    {
        icon: "./s9.webp",
        titulo: "Motores de Calidad",
    },
    {
        icon: "./s10.webp",
        titulo: "paneles solares",
    },
]

const SectionServiciosIcon = () => {
    return (
        <div className='bg-[#1D5E9D] w-full space-y-20 h-full px-5 pb-20 md:pb-0 md:px-20 md:py-10'>
            <div className='grid grid-cols-2 md:grid-cols-5 pt-10 md:pt-0 gap-y-10 md:space-x-5'>
                {
                    SERVICIO_DATA.map((data,index)=>(
                        <ServicioIconCard icon={data.icon} titulo={data.titulo} index={index} />
                    ))
                }
            </div>

        </div>
    )
}


const ServicioIconCard = ({icon,titulo,index}) => {
    return (
        <motion.div 
        initial={{
            opacity:0.2
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            delay: index * 0.5,
            duration:0.4
        }}
        className='w-full flex flex-col justify-center items-center space-y-3 h-fit'>
            <img src={icon} className='md:w-32 md:h-32 w-16 h-16' alt="" />
            <h4 className='text-white font-semibold md:text-[27px] text-[15px] uppercase text-center'>{titulo}</h4>
        </motion.div>
    )
}

export default SectionServiciosIcon
