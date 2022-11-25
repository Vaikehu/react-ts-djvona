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
      pagination={true}
      modules={[EffectFade, Navigation, Pagination]}
    >
      {data.map((slide) => (
        <SwiperSlide>
          <img
            src={slide.url}
            style={{ height: '25rem', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <img
          src={
            'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.photoway.com%2Fimages%2Ftour-du-monde%2FTDM96_1664.jpg&imgrefurl=https%3A%2F%2Fwww.photoway.com%2Ffr%2Fdest%2FTDM96_7_poly2_moor_01.html&tbnid=wyEYuTdd2Ro03M&vet=12ahUKEwiS_LmzmMr7AhU1HjQIHQ7VA3EQMygTegUIARDFAQ..i&docid=9PY0jO6kU4h8VM&w=960&h=640&q=image%20de%20plage%20moorea&hl=fr&client=tablet-android-samsung-nf-rev1&ved=2ahUKEwiS_LmzmMr7AhU1HjQIHQ7VA3EQMygTegUIARDFAQ'
          }
          style={{ height: '25rem', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
      <div className="title text-center pd-5 m-5" data-swiper-parallax="-300"> BUNGALOW 
      </div>
      </SwiperSlide>
    </Swiper>
    
  );
}
