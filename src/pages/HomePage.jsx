import { useEffect } from "react";
import MovieLists from "../components/MovieLists"
import TvLists from "../components/TvLists"
import { useGlobalContext } from "../context/GlobalContext"
import YouTube from 'react-youtube';

const HomePage = () => {

  const { searchResults, fetchVideo, videoId, searchData } = useGlobalContext()

  const opts = {
    height: '720',
    width: '1280',
    playerVars: {

      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  useEffect(() => {
    const movie = searchResults.find(media => media.media_type === 'movie');
    if (movie) {
      fetchVideo(movie.id);
    }
  }, [searchResults, fetchVideo, searchData]);

  return (
    <div className="container">
      <div className="container video">
        <YouTube
          videoId={videoId}
          opts={opts}
        />
      </div>
      <div className="row">
        <h1>{searchResults.length === 0 ? '' : 'Movies'}</h1>
        <MovieLists />
      </div>
      <div className="row">
        <h1>{searchResults.length === 0 ? '' : 'TV Series'}</h1>
        <TvLists />
      </div>

    </div>
  )
}

export default HomePage