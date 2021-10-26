import Image from 'next/image';
import dasboardui from '../../../public/images/dashboard-ui.PNG'


export default function Features() {
  return (
       <div className="features__section">
          <div className="container">

              <div className="row _tpad1">
                  <div className="col-12 col-lg-6 position-relative">
                     <div className="_features_lf"></div>
                        <div className="_img-wrapper">
                            <Image src={dasboardui}  />
                        </div>
                  </div>
                  <div className="col-12 col-lg-6  position-relative">
                      <div className="__features_rig">
                          <br />
                          <span className="__main__feature">controls</span>
                          <h5 className="display-5">Easy way to record all transactions.</h5>
                          <p>
                          Lippsa is a free online accounting software in Nigeria, view your automatically generated business reports to know how your business is really doing.   
                         </p>
                         <br />
                         <ul>
                             <li>
                                 <span className="svg--ico">
                                    <svg version="1.1" id="Check" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                                            <path d="M8.294,16.998c-0.435,0-0.847-0.203-1.111-0.553L3.61,11.724c-0.465-0.613-0.344-1.486,0.27-1.951
                                                c0.615-0.467,1.488-0.344,1.953,0.27l2.351,3.104l5.911-9.492c0.407-0.652,1.267-0.852,1.921-0.445
                                                c0.653,0.406,0.854,1.266,0.446,1.92L9.478,16.34c-0.242,0.391-0.661,0.635-1.12,0.656C8.336,16.998,8.316,16.998,8.294,16.998z"/>
                                            </svg>
                                </span>
                                 <span className="span--txt">Fully integrated tool to enhance businesses</span>

                            </li>
                             <li>
                                <span className="svg--ico">
                                <svg version="1.1" id="Check" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                                            <path d="M8.294,16.998c-0.435,0-0.847-0.203-1.111-0.553L3.61,11.724c-0.465-0.613-0.344-1.486,0.27-1.951
                                                c0.615-0.467,1.488-0.344,1.953,0.27l2.351,3.104l5.911-9.492c0.407-0.652,1.267-0.852,1.921-0.445
                                                c0.653,0.406,0.854,1.266,0.446,1.92L9.478,16.34c-0.242,0.391-0.661,0.635-1.12,0.656C8.336,16.998,8.316,16.998,8.294,16.998z"/>
                                            </svg>
                                </span>
                                <span className="span--txt">View all calculated expenses in real time</span>
                             </li>
                         </ul>
                      </div>
                  </div>
              </div>
                
              <div className="row  _tpad2">
                  <div className="col-12 col-lg-6">
                      <div className=" __features_rig">
                          <br />
                          <span className="__main__feature">invoices</span>
                          <h5 className="display-5">Send invoices to customer.</h5>
                          <p>
                          With Lippsa you can create custom invoices and share it to your customer for FREE!.   
                         </p>
                      </div>
                  </div>
                  <div className="col-md-6 position-relative">
                    <div className="_features_lf2"></div>
                            <div className="_img-wrapper2">
                                <Image src={dasboardui}  />
                            </div>
                    </div>
              </div>
              
           
              <div className="row _tpad">
                  <div className="col-12 col-lg-6 position-relative">
                    <div className="_features_lf"></div>
                                <div className="_img-wrapper">
                                    <Image src={dasboardui}  />
                                </div>
                   </div>
                  <div className="col-md-6">
                    <div className=" __features_rig">
                            <br />
                          <span className="__main__feature">inventory</span>
                          <h5 className="display-5">Manage your Inventory like a pro.</h5>
                          <p>
                          Lippsa helps you Keep track of your stock. Get updates when you are running out of stock and automatically get product supplies from your suppliers.   
                         </p>
                      </div>
                  </div>
             
             </div>




          </div>

          <div className="container x__tainer mt-3">
             <div className="row">
                 <div className="col-12 col-lg-6">
                    <div>
                        <span className="__main__feature">more feature</span>
                        <h3 className="display-5">Total visible and Control management - </h3>
                    </div>
                 </div>
                 <div className="col-12 col-lg-6">
                      <div>
                          <p>Lippsa is a purpose-built spend management platform that helps you escape painful work</p>
                      </div>
                 </div>
             </div>
          </div>
       </div>
  )
}
