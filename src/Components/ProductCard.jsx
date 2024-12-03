import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-30 sm:h-48 bg-slate-200 h-48 flex justify-center items-center">
            <img
              src="https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg"
              className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
              alt="Product"
            />
          </div>
          <div className="p-5">
            <p className="text-gray-600 text-sm mt-2">
              Apple MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey)
              MLY33HN/A (13.6 Inch, Midnight, 1.24 Kg)
            </p>
            <button className="w-full bg-blue-800 text-white py-2 px-4 mt-4 rounded-lg  hover:bg-blue-900">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
