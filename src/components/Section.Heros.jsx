import React from 'react'

const SectionHeros = () => {
    return (
        <div className='md:mt-20 mt-[60%] relative w-full h-fit bg-fondo bg-cover bg-no-repeat' style={{
            backgroundImage: "url(./fondoAzul.webp)"
        }}>
            <img src="./fondo.webp" className='absolute hidden md:block w-full h-full ' alt="" />
            <div className='w-full h-fit pt-[55%] px-5 md:px-20'>
                <img src="./icon1.webp" className='md:w-[110px] md:h-[110px] w-[70px] mx-auto md:m-0' alt="" />
                <h2 className='md:text-[80px] text-[32px] mt-5 text-white font-bold uppercase'>¿quiénes somos?</h2>
                <h2 className='md:text-[80px] text-[32px] -mt-3 md:-mt-8 text-[#1D5E9D] fill-[#1D5E9D] text-stroke-white font-bold uppercase'>¿quiénes somos?</h2>
                <style>
                    {`
          .text-stroke-white {
            -webkit-text-stroke: 1px white; /* Chrome, Safari */
            text-shadow: 
              -1px -1px 0 #fff,  
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff; /* Better compatibility: Will also cover Firefox, IE */
          }
        `}
                </style>

                {/* CONTENIDO QUIENES SOMOS */}
                <p className='text-white md:text-[32px] text-[14px] font-light mt-10'>
                    Somos una empresa innovadora dedicada a ofrecer suministros energéticos, petroleros y otros productos de alta calidad para satisfacer las necesidades de nuestros clientes. Con un enfoque en la excelencia operativa y el compromiso con la sostenibilidad, estamos comprometidos a proporcionar soluciones confiables y eficientes para impulsar el éxito de nuestros socios comerciales. Nuestra pasión por la innovación y el servicio al cliente nos impulsa a ser líderes en la industria, brindando valor y confianza en cada interacción.
                </p>

                {/* MISION Y VISION */}
                <div className='flex md:flex-row flex-col h-fit items-center space-x-0 space-y-10 md:space-y-0 md:space-x-10 my-20'>
                    <div className='w-full flex items-center justify-center p-10 md:p-14 flex-col h-full border-2   border-white rounded-[100px]'>
                        <div className='w-full'>
                            <h2 className='md:text-[64px] text-[28px] text-[#1D5E9D] fill-[#1D5E9D] text-stroke-white font-bold uppercase'>visión</h2>
                        </div>
                        <p className='text-white md:text-[32px] text-[12px] mt-5'>
                            En nuestra visión, nos proyectamos como líderes en la provisión de soluciones integrales en metalmecánica, instrumentación, electrónica, electricidad, y consolidación de materiales para suministros. Nos esforzamos por expandir nuestra presencia global y consolidar nuestra reputación como empresa referente en innovación, calidad y servicio al cliente en todos los aspectos de nuestra operación.
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center p-10 md:p-14 flex-col h-full border-2   border-white rounded-[100px]'>
                        <div className='w-full'>
                            <h2 className='md:text-[64px] text-[28px] text-[#1D5E9D] fill-[#1D5E9D] text-stroke-white font-bold uppercase'>Misión</h2>
                        </div>
                        <p className='text-white md:text-[32px] text-[12px] mt-5'>
                            Nuestra misión es proporcionar soluciones especializadas y de alta calidad superando las expectativas de proveedores locales dedicados a clientes directos a través de la excelencia en el diseño, suministro, instalación y mantenimiento de equipos y sistemas. Nos comprometemos a mantenernos a la vanguardia tecnológica y a garantizar la satisfacción del cliente en cada proyecto que ejecutamos..
                        </p>
                    </div>
                </div>

                {/* NUESTROS SERVICIOS */}
                <h2 className='md:text-[80px] text-[32px] -mt-3 text-center opacity-10 text-[#1D5E9D] fill-[#1D5E9D] text-stroke-white font-bold uppercase'>NUESTROS SERVICIOS</h2>
                <h2 className='md:text-[80px] text-[32px] -mt-3 text-center md:-mt-10 text-white font-bold uppercase'>NUESTROS SERVICIOS</h2>
                <h2 className='md:text-[80px] text-[32px] -mt-3 text-center md:-mt-10 opacity-60 text-[#1D5E9D] fill-[#1D5E9D] text-stroke-white font-bold uppercase'>NUESTROS SERVICIOS</h2>

            </div>


        </div>
    )
}

export default SectionHeros
