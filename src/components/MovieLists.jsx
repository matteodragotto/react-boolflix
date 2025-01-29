import { useGlobalContext } from "../context/GlobalContext"
import MovieCards from "./MovieCards"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';



const MovieLists = () => {

  const { searchResults } = useGlobalContext()

  const mediaType = searchResults.filter(media => media.media_type === 'movie').map(media => (<SwiperSlide key={media.id}><MovieCards key={media.id} media={media} /></SwiperSlide>))

  return (
    <>
      <Swiper
        slidesPerView={4}
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