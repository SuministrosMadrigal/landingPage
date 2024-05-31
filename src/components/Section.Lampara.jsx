import React from 'react'

const SectionLampara = () => {
    return (
        <div className='w-full relative flex flex-col  h-full pt-20 bg-[#1D5E9D] px-[5%] md:px-[10%]'>

            <div className='absolute left-0 top-10 z-[2] w-[30%] h-[90%] bg-lampara1 bg-contain bg-no-repeat' 
                style={{
                    backgroundImage: "url('./lampara1.webp')"
                }}
            />
            <div className='absolute left-[7%] z-[1] top-28 w-[30%] h-[70%] bg-lampara2 bg-contain bg-no-repeat' 
                style={{
                    backgroundImage: "url('./lampara2.webp')"
                }}
            />

            <div className='flex items-center z-[3] mx-auto'>
                <div className='md:w-[30px] md:h-[30px] w-[15px] h-[15px] bg-white rounded-full mr-4 md:mr-10'></div>
                <h3 className='md:ml-3 md:text-[83px] text-[24px] text-white font-bold'>LÁMPARAS INDUSTRIALES</h3>
            </div>

            <p className='w-[68vw] md:ml-auto mb-[15%] z-[3] ml-[13%] text-[14px] md:text-[32px] text-white mt-10'>
                Explore nuestra extensa selección de lámparas industriales, cuidadosamente diseñadas para brindar iluminación óptima y eficiente en entornos laborales exigentes. En nuestra empresa, nos especializamos en trabajar con una amplia variedad de lámparas, desde las convencionales hasta las más avanzadas en tecnología LED. Nuestros productos se distinguen por su alto rendimiento, bajo consumo energético y durabilidad excepcional. Ya sea para almacenes, fábricas o espacios industriales, nuestras soluciones de iluminación están diseñadas para satisfacer las necesidades más exigentes. Potencie la productividad y seguridad en su lugar de trabajo con nuestras lámparas industriales de calidad superior.
            </p>
        </div>
    )
}

export default SectionLampara
