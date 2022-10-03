import { Meta } from '../layout/Meta';
import Navbar from '../layout/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';


const Base = (props: any) => {

  return(
    <div className='antialiased bg-white text-gray-600 right-0 left-0'>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export { Base };