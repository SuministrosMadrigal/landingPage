import React from 'react'
import { motion } from "framer-motion";

const SectionElectronica = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative">
            {/* Background Image */}
            <div className="w-full h-full absolute inset-0 z-10 bg-img-electronica bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url(./metalm.webp)"
                }}
            />

            {/* Triángulo con borde redondeado */}
            <div className="w-full h-full absolute inset-0 bg-triangulo bg-center bg-cover bg-no-repeat z-20"
                style={{
                    backgroundImage: "url('./triangulo.webp')"
                }}
            />

            {/* Content Section */}
            <div className="w-full absolute inset-0 flex justify-end h-full z-30">
                <div className="md:w-1/2 w-full flex flex-col items-end ">
                    <motion.div 
                    initial={{
                        translateX:200,
                        opacity:0.2
                    }}
                    whileInView={{
                        opacity:1,
                        translateX:0
                    }}
                    transition={{duration:0.6}}
                    className="w-fit rounded-l-full mt-20 flex items-center px-7 py-4 md:px-10 bg-white">
                        <h2 className="md:text-[5vw] text-[20px] ml-auto text-[#0B78BB] font-bold md:ml-12">ELECTRÓNICA</h2>
                        <div className="md:w-7 md:h-7  w-4 h-4 bg-[#0B78BB] rounded-full ml-3 mr-10 md:mr-0 md:ml-7"></div>
                    </motion.div>
                    <div className="w-full mt-10 px-4">
                        <p className="text-white font-light text-[3vw] text-center md:text-right">
                            Nos destacamos por nuestro expertise en el diseño y desarrollo de soluciones electrónicas innovadoras para diversas aplicaciones industriales. Nuestros productos y servicios en el ámbito electrónico se distinguen por su fiabilidad, eficiencia y capacidad para satisfacer las demandas más exigentes del mercado.
                        </p>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2 w-full mt-[45vh] md:mt-0 relative inset-0 flex pt-[1%]  h-full z-40'>
                <motion.img 
                initial={{
                    opacity:0.2
                }}
                whileInView={{
                    opacity:1
                }}
                transition={{
                    delay:0,
                    duration:0.7
                }}
                src="./rombo1.webp" className="md:w-[40vw] w-1/2 h-[40%] absolute md:h-[60vh] left-1/2 md:top-5 md:left-0" alt="" />
                <motion.img 
                initial={{
                    opacity:0.2
                }}
                whileInView={{
                    opacity:1
                }}
                transition={{
                    delay:0.2,
                    duration:0.7
                }}
                src="./rombo2.webp" className="md:w-[40vw] w-1/2 h-[40%] absolute md:h-[60vh] md:top-[38%] md:left-[30%]" alt="" />
            </div>

        </div>
    )
}

export default SectionElectronica
