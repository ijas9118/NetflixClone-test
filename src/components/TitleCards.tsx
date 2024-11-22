import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Movie {
  backdrop_path: string;
  title: string;
  id: number;
}

interface TitleCardsProps {
  title: string;
  category: string;
}

const TitleCards: React.FC<TitleCardsProps> = ({ title, category }) => {
  console.log("qwert");
  console.log(import.meta.env);
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${category}`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_AUTH,
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
    <div className=' ml-12 mt-6 mb-3'>
      <h2 className='text-2xl mt-5 mb-3'>{title}</h2>
      <div className='flex gap-2 w-full overflow-x-scroll overflow-y-hidden scrollbar-hidden'>
        {apiData.map((card, index) => {
          return (
            <Link
              to={`/player/${card.id}`}
              key={index}
              className='min-w-64 cursor-pointer group hover:scale-105 transition-transform duration-300'
            >
              <img
                className='w-96 rounded-md'
                src={`https://image.tmdb.org/t/p/w300` + card.backdrop_path}
                alt={card.title}
              />
              <p className='text-center mt-2 text-sm text-gray-300'>
                {card.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
