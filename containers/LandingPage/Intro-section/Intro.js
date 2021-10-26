import Image from 'next/image';
import Button from "../../../components/Button/Button";
import dasboardui from '../../../public/images/dashboard-ui.PNG'


export default function IntroSection() {
  return (
    <>
      <div className="cx-intro-sec _intr-landing">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                  <div className="_col">
                      <h2 className="display-2">
                          <span className="display-2--intro">The Simplest Expense management software to - control <span className="display-2--alt">Accounting.</span></span>
                          <span className="display-2--description">
                          Lippsa helps you to record your transactions, send receipts and invoices, track customers, and send debt bills via SMS at a go.
                          </span>
                      </h2>
                      <Button size={'large'} to={'/'} text={'Start free'} />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="art--bk--g position-relative h-100">
                       <div className="art--sh--"></div>
                          <div className="art--img-container">
                                <Image  src={dasboardui} />
                          </div>  
                  </div>
                </div>
            </div>
           
        </div>
       
      <svg className="svg--intro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fillOpacity="1" d="M0,32L30,48C60,64,120,96,180,133.3C240,171,300,213,360,234.7C420,256,480,256,540,218.7C600,181,660,107,720,80C780,53,840,75,900,90.7C960,107,1020,117,1080,112C1140,107,1200,85,1260,117.3C1320,149,1380,235,1410,277.3L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
     </>
  )
}