import React from 'react';
import { useRouter } from 'next/router';
import Container from './Container';


export default function Navbar() {
  const router = useRouter()

  return (
    <>
      <Container>
        <div className='flex justify-between h-[86px] items-center'>
          <div className='flex items-center'>
            <div className='bg-logo-navbar w-[36px] h-[36px] bg-no-repeat bg-center bg-contain'></div>
            <div className='ml-[1px] text-[26px] font-bold'>Finhub</div>
          </div>
          <div>
            <div className='flex text-[16px] items-center'>
              <div className='mx-3 cursor-pointer'>Solution</div>
              <div className='mx-3 cursor-pointer'>Careers</div>
              <div className='mx-3 cursor-pointer'>About us</div>
              <div className='mx-3 cursor-pointer'>Imprint</div>
              <div  className='mx-3 bg-app-color-100 rounded-full py-[12px] px-[24px] text-white cursor-pointer'>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}