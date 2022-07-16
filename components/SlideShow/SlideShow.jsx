//Import other resouces
import { people } from '../../data';
import './slideShow.scss';

// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

//
import { useRef } from 'react';

function SlideShow() {
   const navigationPrevRef = useRef(null);
   const navigationNextRef = useRef(null);
   return (
      <div className='Slideshow-container'>
         <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
               prevEl: navigationPrevRef.current,
               nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
               swiper.params.navigation.prevEl = navigationPrevRef.current;
               swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            loop={true}
            autoplay={{ delay: 2500 }}
         >
            {people.map((person) => {
               const { id, image, name, title, quote } = person; //image, name, title, quote
               return (
                  <SwiperSlide key={id}>
                     <div className='Slideshow'>
                        <img
                           className='Slideshow__img'
                           src={image}
                           alt='avatar'
                        />
                        <h3 className='Slideshow__name'>{name}</h3>
                        <p className='Slideshow__title'>{title}</p>
                        <p className='Slideshow__qoute'>{quote}</p>
                     </div>
                  </SwiperSlide>
               );
            })}
            <div className='nav-btn' ref={navigationPrevRef} />
            <div className='nav-btn nav-btn--next' ref={navigationNextRef} />
         </Swiper>
      </div>
   );
}
export default SlideShow;
