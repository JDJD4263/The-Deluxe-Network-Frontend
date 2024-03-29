import React from "react";

const NewItemsCard = ({ item }) => {
  return (
    <div
      className={`bg-[#282B2F] mx-4 max-w-max p-6 rounded-xl border border-gray-400 relative transition duration-300 ease-in-out`}
      style={{
        border: "solid 0.0625rem rgb(66 63 63 / 90%)",
        boxShadow: "1px 1px 8px 1px rgb(0 0 0 / 30%)",
      }}
    >
      <div className="relative w-full h-full transition duration-700 ease-in-out transform hover:scale-105">
        <img
          className="block h-auto rounded-lg lg:max-w-max"
          src="http://165.232.191.80/html-dev/nft-and-crypto/Crypto-pack/assets/images/coll-3.jpg"
          height={450}
          width={450}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between p-0 mt-5">
        <p className="mb-1 text-base font-extrabold text-gray-600">Cig Swaag</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <div className="">
        <h5 className="block text-sm font-semibold text-gray-500">
          0.08 ETH <strong className="text-white"> 1/20</strong>
        </h5>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-purple-600">Place a bid</span>
        <div className="flex gap-1 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          50
        </div>
      </div>
    </div>
  );
};

export default NewItemsCard;
