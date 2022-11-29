import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../src/styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper';
import { getDataFromFirebase } from '../database/getDataFromFirebase';

export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = await getDataFromFirebase('header-carrousel');

      console.log(response);
      setData(response);
    })();
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {data.map((slide) => (
        <SwiperSlide>
          <img
            src={slide.url}
            style={{ height: '25rem', objectFit: 'cover' }}
          />
          {/* 
          <figcaption>
            <div className="m-5 title text-center" data-swiper-parallax="-300">
              La Pension Ananas
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="text-center">
                IA ORANA! BIENVENUE CHEZ "FARE VAI".
              </p>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-outline-primary btn-lg m-5"
                type="button"
                href="/Bedroom"
              >
                "FARE VAI"
              </button>
            </div>
          </figcaption>
          */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
