import Container from '../layout/Container'
import Background from '../layout/Background'

import { Cart } from '../components/carts/Cart'
import { Button } from '../components/Button'

export default function Solution() {
  return (
    <>
      <Background>
        <Container>
          <div className='mt-24'>
            <div className='flex justify-center font-worksans text-[48px] tracking-[-0.01em] font-bold my-16'>
              <p>What can we do for you</p>
            </div>
            <div className='flex justify-between mt-6'>
              <Cart 
                title='Product Development' 
                content='We do product development from concept to finished products—and every step in between. We assign qualified project managers that will make sure your request is shipped in time.'
              />
              <Cart 
                title='Outstaffing' 
                content='We provide agile teams that will join your ongoing project at any stage. We speak your language and adapt to your needs. Our engineers are flexible and trained to join seamlessly the existing team.'
              />
              <Cart 
                title='Sales Services' 
                content='We assist startups with sales force and help in identifying untapped market possibilities. We focus on B2B sales development within the European markets. Our team speaks English, German, Romanian and Russian.'
              />
            </div>
            <div className='flex justify-between my-5'>
              <Cart 
                title='Web Development' 
                content='We create great-looking websites that work across all devices and are easy to update and maintain. We will take your website from concept to completion quickly and affordably.'
              />
              <Cart 
                title='Mobile Development' 
                content='We will make your mobile app a success so you can focus on what really matters. We provide intuitive flows with usable and performant applications. You get a scalable and easy-to-maintain codebase for both iOS and Android.'
              />
              <Cart 
                title='UX/UI design' 
                content='We are passionate about efficient human-computer interactions. We help you tell your story through engaging user interfaces. Your customers will love to interact with your services, products, and offerings. '
              />
            </div>
            <div className='flex justify-between mb-12'>
              <Cart 
                title='DevOps' 
                content='We are passionate about DevOps – from infrastructure to security and operations. We will help you build tools to simplify operations and make automation easy.'
              />
              <Cart 
                title='Testing &amp; QA' 
                content='We provide testing and QA services for websites and mobile apps. We&apos;ve been improving the quality of code for businesses worldwide. We got expertise in all types of testing – so you don&apos;t have to choose.'
              />
              <Cart 
                title='Let’s roll up our sleeves' 
                content='We believe in your idea, but we don&apos;t believe in you. If you need something listed above – leave it with us. We will take it to the next level. Okay?'
                style='blue'
              />
            </div>
          </div>
        </Container>
      </Background>
      <Container>
          <div className='w-full min-h-[488px] bg-[#D23C77] rounded-3xl text-white mt-44 mb-36 flex flex-col items-center'>
            <div className='text-[48px] font-bold font-worksans text-center mt-[76px] leading-[56px] mx-12'>
              <p>Got a project?</p>
							<p>Let&apos;s build it properly. Together.</p>
            </div>
						<div className='text-[18px] max-w-[660px] mt-[60px] text-center mx-12'>
							<p>Have a great product idea, or looking for a remote team to build products for your company? We would love to hear from you.</p>
						</div>
						<div className='mt-[60px] mb-16 font-onest'>
							<Button title='Contact' color='bg-app-color-400' textColor='text-[#D33F79]' href='/contact' />
						</div>
          </div>
        </Container>
    </>
  )
}