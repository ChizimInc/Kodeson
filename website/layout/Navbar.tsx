import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Container from './Container';
import { Button } from '../components/Button';


export default function Navbar() {
  const router = useRouter()

  return (
    <>
      <Container>
        <div className='flex justify-between h-[86px] items-center'>
          <Link href='/' passHref>
            <div className='flex items-center font-worksans cursor-pointer'>
                <div className='bg-logo-navbar w-[46px] h-[36px] bg-no-repeat bg-center bg-contain'></div>
                <div className='ml-[3px] text-[26px] font-bold'>Kodeson</div>
            </div>
          </Link>
          <div>
            <div className='flex text-[16px] items-center'>
              <div className='mx-3 cursor-pointer'>
                <Link href='/solution' passHref>Solution</Link>
              </div>
              <div className='mx-3 cursor-pointer'>
                <Link href='/careers' passHref>Careers</Link>
              </div>
              <div className='mx-3 cursor-pointer'>
                <Link href='/about-us' passHref>About us</Link>
              </div>
              <div className='mx-3 cursor-pointer'>
                <Link href='/imprint' passHref>Imprint</Link>
              </div>
              <Button title='Contact' color='bg-app-color-100' href='/contact' />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}