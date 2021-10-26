import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import cust1 from '../../../public/images/cust1_.png';

export default function Companies() {
  return (
     <div className="companies__section _sec">
         <div className="container-fluid position-relative">
           <div className="row _companies--row justify-content-center">
              <h5 className="display-5">
                <span className="display-5--span-i">
                  Trusted By 20,000+
                 </span>
                <span className="display-5--span-ii"> business owners for  </span>
                <span className="display-5--span-iii pe-3">
                  <Typewriter
                        words={[
                          'transactions record',
                          'simple bookkeeping', 
                          'invoicing',   
                          'tracking customers',   
                          'send debit bills',   
                          ]}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                  </span>
              </h5>
           </div>
           <div className="_row2--cust">
              <span className="_row2--cust--lcard">
                <Image src={cust1}  />
              </span>
              <span className="_row2--cust--rcard"></span>
              <span className="_row2--cust--tcard"></span>
              <span className="_row2--cust--bcard"></span>
              <span className="_row2--cust--bbcard"></span>
           </div>
         </div>
     </div>
  )
}
