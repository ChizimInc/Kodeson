import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

import Container from '../layout/Container'
import Background from '../layout/Background'
import { Partners } from '../components/Partners'
import { Cart } from '../components/Cart'
import { Button } from '../components/Button'
import { TechList } from '../components/TechList'

import { Backend } from '../components/dev-logo/Backend'
import { Devops } from '../components/dev-logo/DevOps'
import { Frontend } from '../components/dev-logo/Frontend'
import { Mobile } from '../components/dev-logo/Mobile'

const Home: NextPage = () => {
  const [ showLogo, setShowLogo ] = useState(0)

  const devLogo = () => {
    switch(showLogo){
      case 1:
        return <Frontend />
      case 2:
        return <Mobile />
      case 3:
        return <Backend />
      case 4:
        return <Devops />
      default:
        return ''
    }
  }

  return (
    <>
      <Background>
        <Container>
          <div className='flex flex-col items-center'>
            <div className='w-[660px] text-[54px] font-bold leading-[60px] mt-[80px]'>
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
            '/icons/partners-logo/xolife.svg',
            '/icons/partners-logo/vispa.svg',
          ]
        }
      />
      <Background>
        <Container>
          <div>
            <div className='flex justify-center text-[40px] font-bold my-12'>
              <p>What can we do for you</p>
            </div>
            <div className='flex justify-between'>
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
            <div className='flex justify-center my-20'>
              <Button title='Check all solutions' />
            </div>
          </div>
        </Container>
      </Background>
      <div className='flex justify-center bg-[#292929] text-white mt-36'>
        <Container>
          <div className='flex mb-20'>
            <div className='flex items-center'>
              <div className='w-[324px] h-[467px]'>
                {
                  devLogo()
                }
              </div>
            </div>
            <div className='max-w-[980px]'>
              <div className='text-[42px] font-bold mt-24'>
                <p className='ml-12'>Our techstack</p>
              </div>
              <div className='flex flex-wrap justify-start'>
                <div 
                  onMouseEnter={() => setShowLogo(1)}
                  onMouseLeave={() => setShowLogo(0)}
                >
                  <TechList
                    title='Frontend Development' 
                    list={
                      [
                        'Angular',
                        'React',
                        'Vue',
                        'TypeScript'
                      ]
                    }
                  />
                </div>
                <div 
                  onMouseEnter={() => setShowLogo(2)}
                  onMouseLeave={() => setShowLogo(0)}
                >
                  <TechList
                    title='Mobile Development' 
                    list={
                      [
                        'Flutter',
                        'React Native',
                        'Cotlin, Swift',
                        'Ionic'
                      ]
                    }
                  />
                </div>
                <div 
                  onMouseEnter={() => setShowLogo(3)}
                  onMouseLeave={() => setShowLogo(0)}
                >
                  <TechList
                    title='Backend Development' 
                    list={
                      [
                        'Node.js (Express, NestJS, KoaJS) ',
                        'PHP (Laravel, Symfony)',
                        'Python (Django)',
                        'Ruby on Rails',
                        '.NET',
                        'Java'
                      ]
                    }
                  />
                </div>
                <div 
                  onMouseEnter={() => setShowLogo(4)}
                  onMouseLeave={() => setShowLogo(0)}
                >
                  <TechList
                    title='DevOps' 
                    list={
                      [
                        'Docker',
                        'AWS',
                        'Google Cloud Platform',
                        'Kubernetes'
                      ]
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
