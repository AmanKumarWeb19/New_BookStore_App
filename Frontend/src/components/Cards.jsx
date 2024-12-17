import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-6 p-3">
        <div className="card bg-base-100 w-92 shadow-xl group overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <figure className="overflow-hidden">
            <img
              className="transform group-hover:scale-110 transition duration-300 ease-in-out"
              src={item.image}
              alt="cards images"
            />
          </figure>
          <div className="card-body group-hover:bg-gray-100 transition duration-300 ease-in-out">
            <h2 className="card-title group-hover:text-pink-500 transition duration-300 ease-in-out">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="hover:bg-pink-500 hover:text-white duration-200 cursor-pointer px-2 py-1 rounded-full border-[2px]">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
