import React from 'react'

const SectionElectricidad = () => {
    return (
        <div className='w-full flex my-10 md:my-0 flex-col items-center  h-fit'>

            <div className='w-fit px-10 mt-[10%] h-fit rounded-full flex items-center justify-center py-3  border-[7px] border-[#0B78BB]'>
                <div className='w-[30px] h-[30px] bg-[#0B78BB] rounded-full'></div>


                <h2 className='md:text-[83px] text-[5vw] text-[#0B78BB] font-bold ml-5 md:ml-12'>ELECTRICIDAD</h2>

            </div>

            <div className='w-full flex flex-col items-center px-[5%] mt-10'>
                <p className='text-[#1D5E9D] text-[14px] md:text-[2.5vw]'>
                    Ofrecemos servicios eléctricos integrales, desde el suministro y diseño hasta la instalación y puesta en marcha, garantizando la eficiencia y fiabilidad de cada proyecto. Nuestro compromiso con la excelencia nos permite ofrecer soluciones eléctricas adaptadas a las necesidades específicas de nuestros clientes, asegurando un alto nivel de calidad en cada etapa del proceso.
                </p>

                <img src='./iconos_electricidad.webp' className='my-10' />
            </div>

        </div>
    )
}

export default SectionElectricidad
