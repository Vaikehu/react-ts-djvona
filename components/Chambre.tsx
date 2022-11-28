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
      const response = await getDataFromFirebase('-carrousel');

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
            src={
              'https://picsum.photos/id/237/1000/1600.jpg'
            }
            style={{ height: '25rem', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/pension-ananas-b5cac.appspot.com/o/285626283.jpg?alt=media&token=16c06598-e282-4c3c-bd96-bf0cdc8744f6'
          }
          style={{ height: '25rem', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <div></div>
      </SwiperSlide>
    </Swiper>
  );
}
