import React from "react";

const ShoppingCart = () => {
  const products = [
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/16ff391c39dbe277744db8a11cefadc91c68dd4b829585e674ba0dcb7cbebf1d?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e2600aebad968348c13e16a052ec655e56971fba927c95c055fdb50ac5032048?placeholderIfAbsent=true&apiKey=4de81f06890b4bbb91cb079950880245",
    },
  ];

  const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your shopping cart</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr className="text-gray-500 uppercase text-sm">
              <th className="py-2">Product</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <td className="flex gap-4 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg m-2"
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="font-bold text-gray-800 mt-1">£{product.price}</p>
                  </div>
                </td>
                <td className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span className="px-4">1</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </td>
                <td className="text-center font-bold text-gray-800">
                  £{product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex flex-col items-end space-y-2 sm:items-end">
        <div className="text-gray-500 text-sm">Taxes and shipping are calculated at checkout</div>
        <div className="text-xl font-bold text-gray-800">Subtotal: £{subtotal}</div>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;