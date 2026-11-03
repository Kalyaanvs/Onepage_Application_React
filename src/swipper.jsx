import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import scroll1 from './images/scroll2.png';
import scroll2 from './images/scroll3.png';
import scroll3 from './images/scroll4.png';
import scroll4 from './images/scroll5.png';
import scroll5 from './images/scroll4.png';
import scroll6 from './images/scroll3.png';
import scroll7 from './images/scroll2.png';
import "swiper/css";
import "swiper/css/pagination";

export default function swipper() {
    const images = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7];
    return (
        <>
            <style>
                {`
              .swipper-heading
                {
                  text-align:center;
                  margin-top:40px;
                }
            .swipper-heading h2
              {
                font-size:25px;
                font-weight:450;
                margin-bottom:8px;
            }
            .city-image {
                display: block;
                width: 100%;
                height: clamp(280px, 23vw, 360px);
                object-fit: cover;
                border-radius: 18px;
                }

            `}
            </style>

            <div>
                <div className="swipper-heading">
                    <h2>Find Properties in These Cities</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div style={{ padding: '0 20px', marginTop: '40px' }}>
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                                spaceBetween: 15,
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`City ${index + 1}`} className="city-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}