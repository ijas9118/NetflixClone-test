import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Player: React.FC = () => {
  const [apiData, setApiData] = useState<string>();
  const { id } = useParams();

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjY0MGE4Y2RkODU2ODllZTY2ZTg5OTgwOGYzNGY1NCIsIm5iZiI6MTczMjEyMzYwNy41NjAwMDkyLCJzdWIiOiI2NzNlMTU2NjI0NzkxN2U5NWIyYjBkMzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CJMPidVWAUYGYPyh5Xmdc1z_27bPqpW4jPPitS24X2c",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setApiData(res.data.results[res.data.results.length - 1].key))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className='h-screen  flex items-center justify-center'>
      <Link to={"/"}>
        <ArrowLeft
          size={36}
          className='absolute top-10 left-10 bg-white/40 rounded-full p-1 hover:bg-white/60 hover:scale-110 transition-transform duration-200'
        />
      </Link>
      <iframe
        width='90%'
        height='90%'
        title='trailer'
        src={`https://www.youtube.com/embed/${apiData}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
