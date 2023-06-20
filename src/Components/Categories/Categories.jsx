import React from "react";
import Business from "../../assets/Business.svg";
import Art from "../../assets/Art.svg";
import Webinars from "../../assets/Webinars.svg";
import Charity from "../../assets/Charity.svg";
import Food from "../../assets/Food.svg";
import Hackathons from "../../assets/Hackathons.svg";
import Music from "../../assets/Music.svg";
import Startup from "../../assets/Startup.svg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Business",
      img: Business,
    },
    {
      id: 2,
      name: "Webinars",
      img: Webinars,
    },
    {
      id: 3,
      name: "Art",
      img: Art,
    },
    {
      id: 4,
      name: "Music",
      img: Music,
    },
    {
      id: 5,
      name: "Charity",
      img: Charity,
    },
    {
      id: 6,
      name: "Hackathons",
      img: Hackathons,
    },
    {
      id: 7,
      name: "Startup",
      img: Startup,
    },
    {
      id: 8,
      name: "Food",
      img: Food,
    },
  ];

  return (
    <div className="py-10 sm:py-20 container mx-auto" id="categories">
      <div className="flex flex-col items-center justify-center gap-5 mb-5">
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
          Explore Events by Categories
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-transparent border-black border-2 p-2 rounded-sm cursor-pointer transition duration-300"
            >
              <div className="text-center">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-40 sm:w-36 md:w-52 h-24 sm:h-24 md:h-32 object-cover rounded-sm mb-2 mx-auto"
                />
                <span className="text-black text-lg sm:text-xl font-bold text-center">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
