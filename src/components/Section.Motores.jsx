import React from 'react'

const SectionMotores = () => {
    return (
        <div className='bg-[#1D5E9D] relative overflow-hidden w-full h-fit px-10 py-14'>
            <div className='w-fit border-2 flex items-center py-3 md:py-0 rounded-full space-x-8 border-white  px-[5%] mx-auto'>
                <div className='md:w-[30px] md:h-[30px] w-[15px] h-[15px] bg-white rounded-full' />
                <h2 className='md:text-[83px] text-[20px] uppercase text-white font-bold'>
                    Motores de Calidad
                </h2>
            </div>

            <div className='flex '>
                <div className='w-[40%] hidden md:block'>
                    <img src='./tuercaMotores.webp' className='w-full h-full' />

                </div>

                <div className='flex flex-col w-full md:w-[60%] gap-y-10 my-14 ml-auto'>
                    <h4 className='md:text-end text-center text-white text-[12px] md:text-[32px]'>
                        Entendemos que la clave para una operación eficiente y productiva radica en el motor que impulsa sus equipos. Por eso, nos comprometemos a proporcionar a nuestros clientes motores de las mejores marcas del mercado, incluyendo Grove y Konecranes. Desde motores eléctricos hasta motores de 650 hp, nuestra amplia gama de opciones está diseñada para satisfacer las demandas específicas de su proyecto.
                    </h4>

                    <h4 className='md:text-end text-center text-white text-[12px] md:text-[32px]'>
                        Trabajamos en estrecha colaboración con las marcas más respetadas en la industria para garantizar que cada motor que suministramos cumpla con los más altos estándares de calidad y durabilidad. Nuestra experiencia y dedicación nos convierten en su socio confiable en el suministro de motores, brindándole la tranquilidad de saber que está obteniendo lo mejor para su proyecto
                    </h4>
                </div>
            </div>


        </div>
    )
}

export default SectionMotores
