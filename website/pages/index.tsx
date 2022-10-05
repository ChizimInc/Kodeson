import type { NextPage } from 'next'
import Image from 'next/image'

import Container from '../layout/Container'
import Background from '../layout/Background'
import { Partners } from '../components/Partners'

const Home: NextPage = () => {
  return (
    <>
      <Background>
        <Container>
          <div className='flex flex-col items-center'>
            <div className='w-[660px] text-[54px] font-bold leading-[60px] mt-[60px]'>
              <p className='text-center'>Get custom solutions <br/>
                in product development and sales services</p>
            </div>
            <div className='w-[560px] text-[15px] font-normal leading-[24px] mt-[40px]'>
              <p className='text-center'>Finhub is an expert team with over 10 years of experience in the European market 
                that adjusts to your specific needs without wasting your time.</p>
            </div>
            <div className='mt-[30px] text-[#3262D1] cursor-pointer'>
              <div className='flex'>
                <p>Our solutions</p>
                <div className='ml-2 mt-1'>
                  <Image src="/icons/arrow-right.svg" width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Background>
      <Partners 
        images={
          [
            '/icons/partners-logo/albert.svg',
            '/icons/partners-logo/pakadoo.svg',
            '/icons/partners-logo/parkhere.svg',
            '/icons/partners-logo/riddle.svg',
            '/icons/partners-logo/surein.svg',
            '/icons/partners-logo/vispa.svg',
            '/icons/partners-logo/xolife.svg',
          ]
        }
      />
    </>
  )
}

export default Home
