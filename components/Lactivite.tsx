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
      const response = await getDataFromFirebase('lactivite-carrousel');

      console.log(response);
      setData(response);
    })();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((slide) => (
          <div className="col">
            <div className="card">
              <img src={slide.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{slide.titre}</h5>
                <p className="card-text">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
