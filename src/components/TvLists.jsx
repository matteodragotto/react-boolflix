import { useGlobalContext } from "../context/GlobalContext"
import TvCards from "./TvCards"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';



const MovieLists = () => {

  const { searchResults } = useGlobalContext()

  const mediaType = searchResults.map(media => media.media_type === 'tv' ? <SwiperSlide key={media.id}><TvCards media={media} /></SwiperSlide> : null)

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="movie-swiper"
      >
        {mediaType}
      </Swiper>

    </>
  )
}

export default MovieLists