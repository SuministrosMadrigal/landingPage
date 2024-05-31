import React from 'react'
import { motion } from "framer-motion";

const SectionPanelSolar = () => {
    return (
        <>
            <div className='w-full relative flex overflow-hidden flex-col h-fit bg-[#1D5E9D] px-[8%]'>
                <div className='bg-white mx-auto h-fit py-2 md:py-1 rounded-full md:px-16 px-8 space-x-8 flex items-center'>
                    <div className='md:w-[30px] md:h-[30px] w-[15px] h-[15px] bg-[#1D5E9D] rounded-full' />
                    <h2 className='md:text-[83px] text-[20px] uppercase text-[#1D5E9D] font-bold'>paneles solares</h2>
                </div>

                <h2 className='md:w-[55%] w-[70%] text-white text-[12px] md:text-[28px] mt-[10%] mb-[10%]'>
                    Descubre la eficiencia energética del futuro con nuestros paneles solares de alta calidad. Nuestros paneles fotovoltaicos aprovechan la luz solar para generar electricidad limpia y renovable, reduciendo la dependencia de fuentes de energía basadas en combustibles fósiles y disminuyendo las emisiones de carbono. Estos paneles están compuestos por celdas solares de materiales semiconductores como el silicio, que crean una corriente eléctrica al exponerse al sol. La electricidad generada puede alimentar hogares, negocios y ciudades enteras, promoviendo un uso más sostenible de la energía.
                </h2>

                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{ duration: 0.7 }}
                    className='md:w-full md:max-w-[600px] w-[30%] h-full absolute right-0 top-36 md:top-28 bg-panelsolar bg-contain bg-no-repeat '
                    style={{
                        backgroundImage: "url('./panelsolar.webp')"
                    }}
                />
            </div>
            <div className='w-full relative flex overflow-hidden flex-col h-fit px-[8%]'>
                <h2 className='text-[#1D5E9D] mt-10 text-[12px] md:text-[30px]'>
                    Al instalarse en viviendas, los paneles solares pueden reducir significativamente las facturas de electricidad y proporcionar una fuente de energía confiable y respetuosa con el medio ambiente. Además de beneficiar a los hogares, contribuyen a la producción de energía a gran escala en las ciudades, ayudando a mitigar el impacto ambiental urbano. Nuestros paneles solares están diseñados para ofrecer un rendimiento duradero y son una inversión inteligente tanto para aplicaciones residenciales como comerciales. Únete a nosotros en la construcción de un futuro más limpio y verde para las generaciones venideras.
                </h2>

                <motion.img
                    initial={{
                        opacity: 0,
                        translateX: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{ duration: 0.7 }}
                    src='./panelsolar2.webp' className='md:w-[60%] w-[80%] mx-auto -translate-y-5 md:-translate-y-16' />

                <div className='w-full -translate-y-8 md:-translate-y-16 h-fit flex items-center justify-between'>
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{ duration: 0.7 }}
                        src="./Palmetto.webp" alt="" className='w-1/4 md:h-full' />
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{ duration: 0.7 }}
                        src="./green-home.webp" alt="" className='w-1/4 md:h-full' />
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{ duration: 0.7 }}
                        src="./SunPower.webp" alt="" className='w-1/4 md:h-full' />
                    <motion.img
                        initial={{
                            opacity: 0,
                            translateX: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{ duration: 0.7 }}
                        src="./energypal.webp" alt="" className='w-1/4 md:h-full' />
                </div>
            </div>
        </>

    )
}

export default SectionPanelSolar
