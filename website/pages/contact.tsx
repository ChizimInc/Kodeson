import Container from '../layout/Container'
import Background from '../layout/Background'
import { Button } from '../components/Button'

export default function Contact() {
  return (
    <>
      <Background>
        <Container>
          <div>
            <div className='text-[42px] font-worksans font-bold leading-[60px] mt-[80px]'>
              <p>Let&apos;s make your project a reality</p>
            </div>
            <div className='max-w-[365px] text-[18px] my-8'>
              <p>Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
            </div>
            <div className='text-[14px] mt-24'>
              <p>Fill the form below:</p>
            </div>
            <div className='text-[32px] font-worksans font-semibold leading-[60px]'>
              <p>What are you interested in?</p>
            </div>
            <div className='flex mt-2'>
              <div className='rounded-[30px] py-[8px] px-[16px] border-[1px] border-black mr-3'>
                <p>Outstaffing</p>
              </div>
              <div className='rounded-3xl py-[8px] px-[16px] border-[1px] border-black mx-3'>
                <p>Product Development</p>
              </div>
              <div className='rounded-3xl py-[8px] px-[16px] border-[1px] border-black mx-3'>
                <p>SaaS Sales</p>
              </div>
              <div className='rounded-3xl py-[8px] px-[16px] border-[1px] border-black mx-3'>
                <p>Other Service</p>
              </div>
            </div>

            <div className='flex mt-24'>
              <div className='w-[50%]'>
                <div className='flex'>
                  <div>
                    <input type="text" className='w-[240px] border-b-2 border-[#797979] mr-12 bg-inherit' />
                    <p className='text-[#797979] mt-1'>Name*</p>
                  </div>
                  <div>
                    <input type="text" className='w-[240px] border-b-2 border-[#797979] mr-12 bg-inherit' />
                    <p className='text-[#797979] mt-1'>Company*</p>
                  </div>
                </div>
                <div className='flex mt-16'>
                  <div>
                    <input type="text" className='w-[240px] border-b-2 border-[#797979] mr-12 bg-inherit' />
                    <p className='text-[#797979] mt-1'>Phone*</p>
                  </div>
                  <div>
                    <input type="text" className='w-[240px] border-b-2 border-[#797979] mr-12 bg-inherit' />
                    <p className='text-[#797979] mt-1'>E-mail*</p>
                  </div>
                </div>
              </div>
              <div className='w-[50%] flex flex-col'>
                <div className='max-w-[550px]'>
                <input type="text" className='w-[100%] h-[143px] rounded-xl border-2 border-[#797979] mr-12 bg-inherit' />
                <p className='text-[#797979] mt-1'>Message</p>
                </div>
              </div>
            </div>
            <div className='my-24 w-[165px]'>
              <Button title='Submit form' color='bg-app-color-100' href='/submit' />
            </div>
          </div>
        </Container>
      </Background>
    </>
  )
}