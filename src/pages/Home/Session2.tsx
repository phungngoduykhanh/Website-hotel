import { useSinglePrismicDocument } from '@prismicio/react';


export default function Session2() {

  const [hotelinfo] = useSinglePrismicDocument('hotel');
  // console.log('hotel',hotelinfo?.data.img_user.url);
  
  const renderSS2 = ()=>{
    if(hotelinfo){
          return (
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
                  data-aos="fade-up"
                >
                  <figure className="img-absolute">
                    <img src={hotelinfo.data.img_user.url} alt="Image" className="img-fluid" />
                  </figure>
                  <img src={hotelinfo.data.img_cover.url} alt="Image" className="img-fluid rounded" />
                </div>
                <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                  <h2 className="heading">{hotelinfo?.data.title[0].text}</h2>
                  <p className="mb-4">
                    {hotelinfo?.data.shortdescription[0].text}
                  </p>
                  <p>
                    <a href="/detail" className="btn btn-primary text-white py-2 mr-3 button-ss2">
                      Learn More
                    </a>{" "}
                    <span className="mr-3 font-family-serif">
                      <em>or</em>
                    </span>{" "}
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      data-fancybox=""
                      className="text-uppercase letter-spacing-1 a-ss2"
                    >
                      See video
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )
        }
        else{
          return <div></div>;
        }
    }

  return (
    <section className="py-5 bg-light">
      {renderSS2()}
    </section> 
  )
}
