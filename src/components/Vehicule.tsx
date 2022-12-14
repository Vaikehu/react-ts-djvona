import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper';
import { getDataFromFirebase } from '../database/getDataFromFirebase';

export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = await getDataFromFirebase('header-carrousel');

      console.log(response);
      setData(response as never[]);
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
      //pagination={true}
      modules={[EffectFade, Navigation, Pagination]}
    >
      {data.map((slide: any) => (
        <SwiperSlide>
          <img
            src={slide.url}
            style={{ height: '49rem', objectFit: 'cover', objectPosition:'center', width:'100%'}}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



