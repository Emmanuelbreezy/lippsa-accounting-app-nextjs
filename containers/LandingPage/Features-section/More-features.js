import Image from 'next/image';
import Button from '../../../components/Button/Button';
import dasboardui from '../../../public/images/dashboard-ui.PNG'


export default function MoreFeatures() {
  return (
       <div className="features__section pb-4">
          <div className="container">
                
              <div className="row  _tpad2">
                  <div className="col-12 col-lg-6">
                      <div className=" __features_rig">
                          <br />
                          <span className="__main__feature">more feature</span>
                          <h5 className="display-5">The best expense claim system for - your business</h5>
                          <br />
                          <br />
                          <Button size={'large'} to={'/'} text={'Get Started'} />
                      </div>
                  </div>
                  <div className="col-md-6 position-relative">
                    <div className="_features_lf2"></div>
                            <div className="_img-wrapper2">
                                <Image src={dasboardui}  />
                            </div>
                    </div>
              </div>

          </div>

       </div>
  )
}
