import { Mail, PhoneCall } from 'lucide-react'
import React from 'react'

const SectionContacto = () => {
    return (
        <div className='w-full relative min-h-screen'>
            <div className='bg-trianguloC w-full h-[120vh] bg-cover bg-no-repeat ' 
                style={{
                    backgroundImage:"url('./trianguloCompleto.webp')"
                }}
            >
                <div className='flex items-center bg-[#2B88C3] mx-auto rounded-full py-8 px-6 w-fit'>
                    <Mail className='md:w-[10vw] w-[50px] h-[75px] mr-4 md:h-[150px] text-white' />
                    <div>
                        <h4 className='text-white text-[14px] md:text-[3vw]'>
                            information@suministrosmadrigal.com
                        </h4>

                        <h4 className='text-white text-[14px] md:text-[3vw]'>
                            tedjosemorales@gmail.com
                        </h4>
                    </div>
                </div>


                <div className='flex items-center mt-[10%] bg-[#2B88C3] mx-auto rounded-full py-8 px-14 w-fit'>
                    <PhoneCall className='md:w-[10vw] w-[50px] h-[75px] mr-4 md:h-[150px] text-white' />
                    <div>
                        <h4 className='text-white text-[14px] md:text-[2.5vw]'>
                            +58 414 791 2267
                        </h4>

                        <h4 className='text-white text-[14px] md:text-[2.5vw]'>
                            +1 786-757-0494
                        </h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SectionContacto
