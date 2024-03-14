import React from "react";

const formatPrice = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const Cart = (product) => {
  return (
    <>
      <div className="max-w-[220px] h-[300px] text-center flex  flex-col justify-between shadow-lg p-4 my-4 ">
        <div className="flex justify-between items-start">
          <img className="w-[200px] h-[200px]" src={product.img} alt="" />
          <button>
            <img src="/heart-like.png" alt="" />
          </button>
        </div>
        <div>
          <h2 className="hover:text-yellow-500">
            {product.title.slice(0, 40)}
          </h2>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-sm line-through text-slate-400">
              {formatPrice(product.price * 12450)} Сум
            </p>
            <p className="font-semibold">
              {formatPrice(product.newPrice * 12450)} Сум
            </p>
          </div>
          <button>
            <img src="/cart2-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
