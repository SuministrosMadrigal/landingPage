import React from 'react'

const SectionTecnologiaIOT = () => {
    return (
        <div className='w-full h-fit relative pt-16 pl-5 md:pl-10'>
            <div className='bg-techiot bg-cover bg-center absolute inset-0 bg-no-repeat grayscale-[100] w-full h-full'
                style={{
                    backgroundImage: "url('./techiot.webp')"
                }}
            />
            <div className='bg-[#1D5E9D] w-fit mx-auto px-10 max-w-[900px] space-x-4 md:space-x-0 py-5 md:px-10 rounded-full z-[1] grayscale-0 flex justify-center md:justify-start items-center'>
                <div className='md:w-[30px] w-[15px] h-[15px] md:h-[30px] bg-white rounded-full md:mr-16' />
                <h2 className='text-white uppercase font-bold text-[20px] md:text-[5vw] '>tecnologia iot</h2>
            </div>

            <h2 className='text-[#1D5E9D] w-[60%] py-[5%] pl-4 md:pl-8 grayscale-0 text-[12px] md:text-[2.5vw]'>
                Nos enorgullecemos de ofrecer una amplia gama de productos con tecnología IoT, incluyendo sensores y cámaras inteligentes.
                Nuestra innovadora línea de suministros IoT está diseñada para proporcionar soluciones avanzadas y conectividad en tiempo real para diversas aplicaciones comerciales e industriales.
                Ya sea que esté buscando optimizar la gestión de inventario, mejorar la seguridad en el lugar de trabajo o implementar soluciones de monitoreo remoto, nuestros productos IoT están preparados para satisfacer sus necesidades.
                Descubra cómo la tecnología IoT puede llevar su empresa al siguiente nivel.
            </h2>
        </div>
    )
}

export default SectionTecnologiaIOT
