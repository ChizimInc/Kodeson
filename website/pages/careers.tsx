import Link from 'next/link'
import Image from 'next/image'

import Container from '../layout/Container'
import Background from '../layout/Background'
import { Button } from '../components/Button'
import { CareersList } from '../components/CareersList'
import { ApplyCart } from '../components/carts/ApplyCart'

export default function Careers() {
  return (
    <>
      <Background>
        <Container>
          <div className='flex flex-col items-center'>
            <div className='w-[660px] text-[54px] font-bold leading-[60px] mt-[80px]'>
              <p className='text-center'>Ready to jump on board?</p>
            </div>
            <div className='w-[560px] text-[15px] font-normal leading-[24px] mt-[40px]'>
              <p className='text-center'>We are a diverse team with diverse backgrounds, such as engineering, finance, computer science, arts, law, and more.</p>
            </div>
            <div className='w-[560px] text-[15px] font-normal leading-[24px] mt-[20px]'>
              <p className='text-center'>We would love to have you.</p>
            </div>
            <div className='mt-[40px] mb-16'>
							<Button title='View open roles' color='bg-app-color-100' textColor='text-[#FFFFFF]' href='/contact' />
						</div>
          </div>
        </Container>
      </Background>
      <Container>
        <div>
          <div className='flex justify-center text-[40px] font-bold my-16'>
            <p>Why work at Finhub?</p>
          </div>
          <div className='flex justify-evenly'>
            <CareersList 
              text={
                [
                  'Zero bureaucracy in our company.',
                  'We pursue traction, not distraction.'
                ]
              }
              image='/icons/numbers/1.svg'
            />
            <CareersList 
              text={
                [
                  'No employer-branded t-shirts and cups.',
                  'We really value your personality.'
                ]
              }
              image='/icons/numbers/2.svg'
              revert
            />
          </div>
          <div className='flex justify-evenly my-[42px]'>
            <CareersList 
              text={
                [
                  'We care about your growth.',
                  'You won’t get dull.'
                ]
              }
              image='/icons/numbers/3.svg'
            />
            <CareersList 
              text={
                [
                  'We’re honest. You get',
                  'perfect transparency of processes.'
                ]
              }
              image='/icons/numbers/4.svg'
              revert
            />
          </div>
          <div className='flex justify-evenly'>
            <CareersList 
              text={
                [
                  'We respect your work-life balance.',
                  'Having a career doesn&apos;t mean having a life.'
                ]
              } 
              image='/icons/numbers/5.svg'
            />
            <CareersList 
              text={
                [
                  'We aim to make our team happy',
                  'so that our customers can be happy too.'
                ]
              }
              image='/icons/numbers/6.svg'
              revert
            />
          </div>
        </div>
      </Container>
      <Background>
        <Container>
          <div className='mb-[140px]'>
            <div className='flex justify-center text-[40px] font-bold mt-36 my-10'>
              <p>We value real</p>
              <p className='text-[#3262D1] ml-2'>diversity</p>
            </div>
            <div className='flex justify-center text-[13px] leading-[24px]'>
              <p className='max-w-[433px] text-center'>Real diversity means diversity of background. When hiring, we look for complementary talent. We believe it is far more valuable than conformist talent.</p>
            </div>
            <div className='flex justify-center text-[13px] leading-[24px] my-3'>
              <p className='max-w-[270px] text-center'>You don&apos;t have a degree? Cool. Are you a national chess champion? Great. Or, maybe you are into astronomy? Alright.</p>
            </div>
            <div className='flex justify-center text-[13px] leading-[24px] my-3'>
              <p className='max-w-[270px] text-center'>We got a spot for you</p>
            </div>
          </div>
        </Container>
      </Background>
      <div className='flex justify-center bg-[#292929] text-white mt-36'>
        <Container>
          <div>
            <div className='flex justify-center text-[40px] font-bold mt-12 my-10'>
              <p>We would love to work with you</p>
            </div>
            <div className='flex justify-center mt-[70px] text-[16px] leading-[32px]'>
              <p className='max-w-[286px] text-center'>Choose a job opening that suits you and apply with confidence.</p>
            </div>
            <div className='mt-[70px] mb-5 flex justify-between'>
              <ApplyCart title='Frontend Developer' address='In-office, Chisinau' />
              <ApplyCart title='Flutter Developer' address='In-office, Chisinau' />
              <ApplyCart title='QA Engineer' address='In-office, Chisinau' />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}