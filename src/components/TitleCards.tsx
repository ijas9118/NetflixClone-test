import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  backdrop_path: string;
  title: string;
}

interface TitleCardsProps {
  title: string;
  category: string;
}

const TitleCards: React.FC<TitleCardsProps> = ({ title, category }) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${category}`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjY0MGE4Y2RkODU2ODllZTY2ZTg5OTgwOGYzNGY1NCIsIm5iZiI6MTczMjEyMzYwNy41NjAwMDkyLCJzdWIiOiI2NzNlMTU2NjI0NzkxN2U5NWIyYjBkMzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CJMPidVWAUYGYPyh5Xmdc1z_27bPqpW4jPPitS24X2c",
    },
  };

  const [apiData, setApiData] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setApiData(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='ml-16 mt-6 mb-3'>
      <h2 className='text-2xl mt-5 mb-3'>{title}</h2>
      <div className='flex gap-2 w-full overflow-x-scroll scrollbar-hidden'>
        {apiData.map((card, index) => {
          return (
            <div key={index} className='min-w-64 cursor-pointer'>
              <img
                className='w-96 rounded-md'
                src={`https://image.tmdb.org/t/p/w300` + card.backdrop_path}
                alt={card.title}
              />
              <p className='text-center mt-2 text-sm text-gray-300'>
                {card.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
