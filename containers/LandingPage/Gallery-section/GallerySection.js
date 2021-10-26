import Image from 'next/image';
import dasboardui from '../../../public/images/dashboard-ui.PNG'


export default function GallerySection() {
  return (
      <div className="gallery__section">    
          <div className="-fluid">
              <div className="gallerybk">
                  <div className="row">
                    <div className="col-12 col-lg-4 p-0">
                       <div className="img-wrapper _img1">
                           <Image src={dasboardui}  />
                         <div className="overly--bk"></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-0">
                      <div className="img-wrapper _img2">
                         <Image src={dasboardui}  />
                         <div className="overly--bk">
                           <span>Lippsa is an accounting software</span>
                         </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 p-0">
                       <div className="img-wrapper _img3">
                          <Image src={dasboardui}  />
                         <div className="overly--bk"></div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
