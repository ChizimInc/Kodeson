import React from 'react';
import { useRouter } from 'next/router';

import Container from './Container';
import { Button } from '../components/Button';


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
              <Button title='Contact' color='bg-app-color-100' />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}