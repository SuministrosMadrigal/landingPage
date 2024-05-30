import React from 'react'

const SectionInstrumentacion = () => {
    return (
        <div className='w-full h-fit relative flex justify-center flex-col  '>
            <div className='w-full h-full bg-img-instru absolute grayscale-[70] bg-center bg-no-repeat bg-cover'>

            </div>

            <div className='bg-[#1D5E9D] z-10 flex flex-col items-center my-20 py-14 justify-center w-[80%] md:w-[60%] h-[80%] rounded-r-[150px] '>
                <div className='flex items-center -ml-14 md:-m-0 space-x-5'>
                    <div className='md:w-7 md:h-7 w-4 h-4 rounded-full bg-white '>

                    </div>
                    <h2 className='md:text-[83px] text-[20px] text-white uppercase font-bold'>Instrumentación</h2>

                </div>

                <p className='text-start mt-10 text-[14px] md:text-[32px] pl-10 md:pl-20 mr-10 text-white font-light'>
                    Nuestra experiencia en soluciones de instrumentación nos posiciona como líderes en la provisión e instalación de sistemas de control y medición de vanguardia. Nos enfocamos en ofrecer soluciones personalizadas que cumplen con los más altos estándares de calidad, asegurando el óptimo funcionamiento de los procesos industriales.
                </p>
            </div>

        </div>
    )
}

export default SectionInstrumentacion