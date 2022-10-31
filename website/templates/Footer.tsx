import Image from 'next/image'
import Link from 'next/link';

import Container from "../layout/Container";
import { FooterLinks } from "../utils/AppData";

const Footer = () => {

  return(
    <>
      <div className='flex justify-center bg-[#292929] text-white min-h-[419px] z-50'>
        <Container>
          <div className="flex justify-between mt-[80px]">
            <div>
              <div className='flex items-center'>
                <div className='bg-logo-navbar w-[36px] h-[36px] bg-no-repeat bg-center bg-contain'></div>
                <div className='ml-[3px] text-[26px] font-bold'>Kodeson</div>
              </div>
              <div className="text-[16px] leading-[24px] font-light max-w-[400px] mt-[40px] mr-16">
                <p>Finhub is an expert team with over 10 years of experience in the European market that adjusts to your specific needs without wasting your time.</p>
              </div>
              <div className="text-[14px] font-light text-[#797979] mt-[100px]">
                <p>Copyright © 2022 Finhub AC GmbH & C0 KG, All rights reserved.</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="text-[16px] font-bold mb-4">
                  <p>Links</p>
                </div>
                {
                  FooterLinks.map( item => (
                    <div className="text-[16px] my-3 font-light cursor-pointer">
                      <Link href={item.link} passHref>
                        <p>{item.name}</p>
                      </Link>
                    </div>
                  ))
                }
              </div>
              <div className="mx-[96px]">
                <div className="text-[16px] font-bold mb-4">
                  <p>Contacts</p>
                </div>
                <div className="text-[16px] my-3 font-light">
                  <p>info@finhubss.com</p>
                </div>
                <div className="text-[16px] my-3 font-light">
                  <p>+43 141 701 33</p>
                </div>
              </div>
              <div>
                <div className="text-[16px] font-bold mb-4">
                  <p>Follow us</p>
                </div>
                <div className="flex">
                  <div className="cursor-pointer">
                    <Image src='/icons/facebook.svg' width={25} height={25} />
                  </div>
                  <div className="mx-3 cursor-pointer">
                    <Image src='/icons/instagram.svg' width={25} height={25} />
                  </div>
                  <div className="cursor-pointer">
                    <Image src='/icons/linkedin.svg' width={25} height={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
};

export { Footer };