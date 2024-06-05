import React from 'react'

const SectionGruas = () => {
    return (
        <div className='w-full relative h-fit bg-[#1D5E9D] px-10'>
            <div className='bg-grua absolute inset-0 bg-cover bg-bottom bg-no-repeat w-full h-full' 
                style={{
                    backgroundImage: "url('./grua.webp')"
                }}
            />

            <div className='flex justify-center pt-12 items-center space-x-1 w-full h-fit grayscale-0'>
                <div className='md:w-[30px] w-[15px] h-[15px] md:h-[30px] mr-5 bg-white rounded-full md:mr-10' />

                <h2 className='text-white font-bold uppercase text-[18px] md:text-[5vw]'>
                    Grúas Grove y Konecranes
                </h2>
            </div>

            <div className='flex flex-col gap-y-5 grayscale-0 w-[80%] md:w-[60%] pt-10 pb-20'>
                <h4 className='md:text-[2.5vw] text-[12px] text-white'>
                    Nos enorgullece ofrecer lo mejor en equipos de elevación y manejo de materiales, por eso elegimos las grúas Grove y Konecranes. Con calidad insuperable y rendimiento excepcional, son la elección preferida por profesionales de la construcción y la industria.
                </h4>

                <h4 className='md:text-[2.5vw] text-[12px] text-white'>
                    Con una reputación establecida por su durabilidad, fiabilidad y adaptabilidad, las grúas Grove y Konecranes garantizan eficiencia y seguridad en cada proyecto, desde construcción hasta operaciones industriales.
                </h4>

                <h4 className='md:text-[2.5vw] text-[12px] text-white'>
                    No comprometemos la calidad. Con nuestras grúas Grove y Konecranes, proporcionamos soluciones de elevación que superan expectativas. Experimente la excelencia y descubra la diferencia en su próximo proyecto.
                </h4>
            </div>

        </div>
    )
}

export default SectionGruas
