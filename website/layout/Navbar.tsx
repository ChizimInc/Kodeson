import React from 'react';
import { useRouter } from 'next/router';
import Container from './Container';


export default function Navbar() {
  const router = useRouter()

  return (
    <>
      <Container>
        <div className='flex justify-between h-[104px] items-center'>
          <div>
            Logo
          </div>
          <div>
            <div className='flex text-[16px]'>
              <div className='text-[16px]'>Solution</div>
              <div>Careers</div>
              <div>About us</div>
              <div>Imprint</div>
              <div>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}