import Image from "next/image";

const ProductCard = ({ title, sku, price, description, weight, image }) => {
  return (
    <div
      id="card"
      className="border-4 border-black rounded-sm w-[min(100%-1rem,20rem)] mx-auto"
    >
      <div id="image" className="w-full">
        <Image width={1620} height={1080} alt="product image" src={image} />
      </div>
      <div className="px-4 py-4">
        <div id="details">
          <div id="flex" className="flex justify-between items-center">
            <div id="headers">
              <h2 id="title" className="text-lg font-bold">
                {title}
              </h2>
            </div>

            <div>
              <h3 id="price" className="font-bold">
                {price}
              </h3>
            </div>
          </div>
          <p id="SKU" className="text-sm italic font-semibold text-gray-600">
            SKU: {sku}
          </p>

          <div id="description">
            <p className="text-lg py-2">{description}</p>
            <p>
              <span className="italic text-sm">Net Weight: {weight}</span>
            </p>
          </div>

          <div id="order" className="text-center mt-6 pb-2">
            <button
              id="addToCart"
              className="border-3 bg-red-300 rounded-md px-4 py-1 hover:bg-red-700 transition-color duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
