import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import { Info, Play } from "lucide-react";
import TitleCards from "../components/TitleCards";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={hero_banner} alt="Hero Banner" className="w-full h-[700px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent"></div>
        <div className="absolute bottom-24 p-10 ml-5">
          <img src={hero_title} alt="Hero Title" className="mb-10 w-1/3" />
          <p className="w-2/4 font-medium">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul
            embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex gap-2 px-5 py-2 text-black bg-white rounded-md items-center font-semibold hover:bg-gray-300 duration-200 transition">
              <Play size={22} />
              Play
            </button>
            <button className="flex gap-2 px-5 py-2 text-white bg-gray-400/60 rounded-md items-center font-semibold hover:bg-gray-400/40 duration-200 transition">
              <Info size={22} />
              More Info
            </button>
          </div>
        </div>
      </div>

      <TitleCards title="Popular on Netflix" category="popular" />
      <TitleCards title="Top Rated" category="top_rated" />
      <TitleCards title="Upcoming Movies" category="upcoming" />
    </div>
  ); 
};

export default Home;
