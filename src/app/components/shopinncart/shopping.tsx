import * as React from "react";
import { CartItem } from "./cartitem";
import { QuantityControl } from "./quntiyitem";
import { CartItemProps } from "./types";

const cartItems: CartItemProps[] = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/16ff391c39dbe277744db8a11cefadc91c68dd4b829585e674ba0dcb7cbebf1d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Graystone vase",
    description: "A timeless ceramic vase with a tri color grey glaze.",
    price: 85,
    quantity: 1
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2600aebad968348c13e16a052ec655e56971fba927c95c055fdb50ac5032048?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    title: "Basic white vase",
    description: "Beautiful and simple this is one for the classics",
    price: 125,
    quantity: 1
  }
];

export const ShoppingCart: React.FC = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col justify-center items-center px-20 py-14 bg-stone-50 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1064px] max-md:max-w-full">
        <h1 className="self-start text-4xl leading-snug text-indigo-950">
          Your shopping cart
        </h1>
        <div className="flex gap-5 justify-between mt-12 text-sm leading-snug whitespace-nowrap text-indigo-950 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div>Product</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        <div className="shrink-0 mt-3 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
        <div className="flex flex-wrap gap-5 justify-between mt-5 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex flex-col text-indigo-950">
            {cartItems.map((item, index) => (
              <div key={index} className="mt-5 first:mt-0">
                <CartItem {...item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col self-start mt-3 whitespace-nowrap">
            {cartItems.map((item, index) => (
              <div key={index} className="mt-28 first:mt-0">
                <QuantityControl
                  quantity={item.quantity}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="shrink-0 mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
        <div className="flex flex-col self-end mt-7 max-w-full w-[282px]">
          <div className="flex flex-col items-end text-right">
            <div className="flex gap-4 items-center leading-snug whitespace-nowrap">
              <div className="self-stretch my-auto text-xl text-indigo-800">
                Subtotal
              </div>
              <div className="self-stretch my-auto text-2xl text-indigo-950">
                £{subtotal}
              </div>
            </div>
            <div className="mt-3 text-sm text-indigo-800">
              Taxes and shipping are calculated at checkout
            </div>
          </div>
          <button className="overflow-hidden gap-2.5 self-end px-8 py-4 mt-4 text-base text-white bg-indigo-950 max-md:px-5">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};