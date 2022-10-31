import Image from 'next/image'
import Background from '../layout/Background'
import Container from '../layout/Container'

export default function Imprint() {
  return (
    <>
      <Background>
        <Container>
          <div>
            <div className='text-[50px] font-worksans font-bold leading-[60px] mt-[80px]'>
              <p>Imprint</p>
            </div>
            <div className='flex mt-16 w-full justify-between px-3 mb-28'>
              <div className='flex min-w-[35%]'>
                <div className='items-center flex'>
                  <Image src="icons/office.svg" width={70} height={70} />
                </div>
                <div className='ml-4 text-[14px]'>
                  <p>Finhub AC GmbH & C0 KG</p>
                  <p>Company nr. FN 529227 a</p>
                  <p>UID (VAT)-Number: ATU75318826</p>
                  <p>Address: Beatrixgasse 27-2-15, 1030 Wien, Austria</p>
                </div>
              </div>
              <div className='flex min-w-[35%]'>
                <div className='flex items-center'>
                  <Image src="icons/person.svg" width={70} height={70} />
                </div>
                <div className='ml-4 text-[14px]'>
                  <p>Vitali Chebanu,</p>
                  <p>Geschäftsführer</p>
                  <p>E-mail: cob@finhubfund.com</p>
                  <p>Phone: +43 1 4170133</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Background>
    </>
  )
}
