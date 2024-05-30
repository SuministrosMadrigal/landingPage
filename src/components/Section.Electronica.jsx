import React from 'react'

const SectionElectronica = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative">
            {/* Background Image */}
            <div className="w-full h-full absolute inset-0 z-10 bg-img-electronica bg-center bg-cover bg-no-repeat" />

            {/* Triángulo con borde redondeado */}
            <div className="w-full h-full absolute inset-0 bg-triangulo bg-center bg-cover bg-no-repeat z-20" />

            {/* Content Section */}
            <div className="w-full absolute inset-0 flex justify-end h-full z-30">
                <div className="md:w-1/2 w-full flex flex-col items-end ">
                    <div className="w-fit rounded-l-full mt-20 flex items-center px-7 py-4 md:px-10 bg-white">
                        <h2 className="md:text-7xl text-[20px] ml-auto text-[#0B78BB] font-bold md:ml-12">ELECTRÓNICA</h2>
                        <div className="md:w-7 md:h-7  w-4 h-4 bg-[#0B78BB] rounded-full ml-3 mr-10 md:mr-0 md:ml-7"></div>
                    </div>
                    <div className="w-full mt-10 px-4">
                        <p className="text-white font-light md:text-3xl text-[18px] text-center md:text-right">
                            Nos destacamos por nuestro expertise en el diseño y desarrollo de soluciones electrónicas innovadoras para diversas aplicaciones industriales. Nuestros productos y servicios en el ámbito electrónico se distinguen por su fiabilidad, eficiencia y capacidad para satisfacer las demandas más exigentes del mercado.
                        </p>
                    </div>
                </div>
            </div>

            {/* Additional Images */}
            <div className="md:w-1/2 w-full mt-[80%] absolute inset-0 flex pt-20 justify-start h-full z-40">
                <img src="./rombo1.webp" className="md:w-[40vw] w-1/2 h-[40%] md:h-[60%] absolute left-1/2 md:top-10 md:left-20" alt="" />
                <img src="./rombo2.webp" className="md:w-[40vw] w-1/2 h-[40%] md:h-[60%] absolute md:top-[38%] md:left-[50%]" alt="" />
            </div>
        </div>
    )
}

export default SectionElectronica
