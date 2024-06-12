import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../../../../assets/state1.png';
import img2 from '../../../../assets/state2.avif';
import img3 from '../../../../assets/state3.jpeg';
import img4 from '../../../../assets/state4.avif';
import img5 from '../../../../assets/05.png';
import img6 from '../../../../assets/state6.avif';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
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
      <SwiperSlide>
        <img className='w-full h-[90vh]' src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh]' src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh]' src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh]' src={img4} />{' '}
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh]' src={img5} />{' '}
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh]' src={img6} />{' '}
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
