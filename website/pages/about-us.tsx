import Container from '../layout/Container'
import Background from '../layout/Background'
import { Button } from '../components/Button'
import { ImageBlock } from '../components/ImageBlock'
import { PartnersCart } from '../components/carts/PartnersCart'

export default function AboutUs() {
  return (
    <>
      <Background>
        <Container>
          <div className='flex flex-col items-center'>
            <div className='w-[660px] text-[54px] font-worksans font-bold leading-[60px] mt-[80px]'>
              <p className='text-center'>About us</p>
            </div>
            <div className='w-[740px] text-[15px] font-normal leading-[24px] mt-[40px]'>
              <p className='text-center'>We are domain experts and problem solvers who are passionate about creating new value for our clients. We thrive in the space between vision and action, tech and sales, design and development. </p>
            </div>
            <div className='w-[560px] text-[15px] font-normal leading-[24px] mt-[20px]'>
              <p className='text-center'>Kodeson was founded in Vienna in 2015.</p>
              <p className='text-center'>We aim to provide expert IT solutions for the European market.</p>
              <p className='text-center'>We specialize in product development, outstaffing, and sales outsourcing.</p>
            </div>
            <div className='w-full min-h-[550px] bg-team-image rounded-3xl text-white mt-24 mb-16 flex flex-col items-center'></div>

          </div>
        </Container>
      </Background>
      <div className='flex justify-center bg-[#292929] text-white mt-12'>
        <Container>
          <div className='flex flex-col items-center'>
            <div className='text-[42px] font-bold font-worksans mt-24 flex justify-center'>
              <p className='ml-12'>Our leadership team</p>
            </div>
            <div className='text-[15px] flex justify-center font-normal leading-[24px] mt-[40px]'>
              <p className='text-center w-[580px]'>Meet our leadership team: they are the ones driving the ship and ensuring that every day is a great one for all of us. More important is the team behind them: dedicated and super smart professionals whose number one job is to turn customers into fans.</p>
            </div>
            <div className='w-[191px] mt-11'>
              <Button title='Join our team' color='bg-app-color-100' href='/contacts' />
            </div>
            <div className='flex justify-evenly w-full mb-20'>
              <ImageBlock image='bg-team-artiom' name='Artiom Cebanu' job='Managing Director' />
              <ImageBlock image='bg-team-vitali' name='Vitali Chebanu' job='CEO' />
              <ImageBlock image='bg-team-dorian' name='Dorian Bujor' job='Vice-President of Business Development' />
            </div>
          </div>
        </Container>
      </div>
      <Background>
        <Container>
          <div className='flex flex-col items-center'>
            <div className='text-[42px] font-worksans font-bold leading-[60px] mt-[80px]'>
              <p className='text-center'>Our partners</p>
            </div> 
            <div className='flex justify-center mt-16 w-full'>
              <PartnersCart logo='images/logo/finhub-capital.svg' content='Finhub Capital is an independent investment fund in Luxembourg with a crowdfunding platform extended in the UK. The platform has projects from all around the world, with the main focus on the DACH market.' />
              <PartnersCart logo='images/logo/anders-capital.svg' content='Anders Capital is a financial consulting company. Its main focus is on projects in manufacturing, energy, construction, development, jurisprudence, and others. It provides financial, development, or managerial resources.' />
            </div>
            <div className='text-[42px] font-worksans font-bold leading-[60px] mt-[80px]'>
              <p className='text-center'>Our locations</p>
            </div>
            <div className='w-full flex justify-center mt-12'>
              <div>
                <div className='my-7'>
                  <div className='font-worksans text-[28px] font-bold'>
                    <p>Austria</p>
                  </div>
                  <div className='max-w-[185px] text-[18px] leading-[24px] mt-2'>
                    <p>Beatrixgasse 27-2-15, 1030 Wien, Austria
                      +43 141 701 33</p>
                  </div>
                </div>
                <div className='my-7'>
                  <div className='font-worksans text-[28px] font-bold'>
                    <p>Slovakia</p>
                  </div>
                  <div className='max-w-[185px] text-[18px] leading-[24px] mt-2'>
                    <p>Hradištná 1524/19A
                      Svätý Jur 900 21
                      +42 191 023 9888</p>
                  </div>
                </div>
                <div className='my-7'>
                  <div className='font-worksans text-[28px] font-bold'>
                    <p>Moldova</p>
                  </div>
                  <div className='max-w-[185px] text-[18px] leading-[24px] mt-2'>
                    <p>Albisoara 4, 
                      Chișinău 2001</p>
                  </div>
                </div>
              </div>

              <div className='bg-europe-map bg-contain bg-no-repeat bg-right w-[80%] h-[500px]'>

              </div>
            </div>
            <div className='w-full min-h-[488px] bg-[#D23C77] rounded-3xl text-white mt-24 mb-36 flex flex-col items-center'>
              <div className='text-[48px] font-bold text-center mt-[76px] leading-[56px] mx-12'>
                <p>Got a project?</p>
                <p>Let&apos;s build it properly. Together.</p>
              </div>
              <div className='text-[18px] max-w-[660px] mt-[60px] text-center mx-12'>
                <p>Have a great product idea, or looking for a remote team to build products for your company? We would love to hear from you.</p>
              </div>
              <div className='mt-[60px] mb-16'>
                <Button title='Contact' color='bg-app-color-400' textColor='text-[#D33F79]' href='/contact' />
              </div>
            </div>
          </div> 
        </Container>
      </Background>
    </>
  )
}