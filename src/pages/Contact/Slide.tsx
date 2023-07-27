import React from 'react';
import { Image,Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Contact.css';
import { useAllPrismicDocumentsByType } from '@prismicio/react';


export default function CarouselSlide() {
    const [documents] = useAllPrismicDocumentsByType('slider');
   
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
    if (!documents || documents.length === 0) {
        return null;
    }
    return (
        <>
            <Row>
                <h1 className="content_people-say">People Says</h1>
            </Row><br /><br />
            <Slider {...settings}>
                {documents.map((document, index) => {
                    const { data } = document;
                    return (
                        <div key={index} className='content_people-slider d-flex justify-content-center align-items-center flex-column p-3'>
                            <Image className="content_people-img" src={data.linkimg.url} roundedCircle /> <br />
                            <p className="content_people-text">{data.content[0].text}</p>
                            <p className="content_people-text">{data.author[0].text}</p>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
}
