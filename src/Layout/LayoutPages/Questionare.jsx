import React from 'react'
import Container from '../../components/container'
import { Button, Radio } from '@material-tailwind/react'

const Questionnaire = () => {
    return (
        <div>
            <Container>
                <div className='flex justify-center mb-[20px]'>
                    <div className='border-[1px] flex flex-col gap-[20px] p-4 max-w-[500px]'>
                        <div>
                            <h2 className='text-[20px] text-center sm:text-[25px] md:text-[25px] lg:text-[25px] font-lobster text-[#256155]'>Anketa</h2>
                            <p className='text-[16px] mt-2 sm:text-[20px] md:text-[15px] lg:text-[20px] font-spectral text-[#3a315d] font-bold uppercase text-center'>
                                Anketani toldiriwin'izdi soraymiz, Bul biz ushin ju'da ahimiyetli
                            </p>
                        </div>
                        <div className=''>
                            <p className='text-[15px] mt-2 font-mont text-[#256155] font-semibold'>Atin'iz</p>
                            <input type="text" className='border-b-2 w-full border-[#558c81] focus:border-[#135a4c] py-1 outline-none font-bold text-[#3a315d] font-spectral text-20px' />
                        </div>
                        <div>
                            <p className='text-[15px] mt-2 font-mont text-[#256155] font-semibold'>Toyg'a kele alasizba</p>
                            <div className="flex  flex-col">
                                <Radio color='teal'  name="type" label="Albette baraman" ripple={true} />
                                <Radio color='teal'  name="type" label="Jubayim menen birge baraman" ripple={true} />
                                <Radio color='teal'  name="type" label="Tilekke qarsi bara almayman" ripple={true} />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <Button color='teal' size='sm' className='text-[15px] font-mont rounded-sm'>Jiberiw</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Questionnaire