import React from 'react';
import { Image } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Contact.css';


export default function CarouselSlide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                <div className='content_people-slider d-flex justify-content-center align-items-center flex-column p-3'>
                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle /> <br />
                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                    </p>
                    <p className="content_people-text">
                        -- Kieu
                    </p>
                </div>
                <div className='content_people-slider d-flex justify-content-center align-items-center flex-column p-3'>
                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_2.jpg" roundedCircle /> <br />
                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                    </p>
                    <p className="content_people-text">
                        -- Kieu
                    </p>
                </div>
                <div className='content_people-slider d-flex justify-content-center align-items-center flex-column p-3'>
                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_3.jpg" roundedCircle /> <br />
                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                    </p>
                    <p className="content_people-text">
                        -- Kieu
                    </p>
                </div>
                <div className='content_people-slider d-flex justify-content-center align-items-center flex-column p-3'>
                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_4.jpg" roundedCircle /> <br />
                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                    </p>
                    <p className="content_people-text">
                        -- Kieu
                    </p>
                </div>
                <div className='content_people-slider d-flex justify-content-center align-items-center flex-column p-3'>
                    <Image className="content_people-img" src="https://themewagon.github.io/sogo/images/person_1.jpg" roundedCircle /> <br />
                    <p className="content_people-text">“A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
                    </p>
                    <p className="content_people-text">
                        -- Kieu
                    </p>
                </div>
            </Slider>
        </>
    );
}
