import Image from "next/image";

const ProductCard = ({ title, sku, price, description, weight, image }) => {
  return (
    <div
      id="card"
      className="border-2 border-black rounded-md w-[min(100%-1rem,20rem)] mx-auto"
    >
      <div id="image" className="w-20">
        <Image width={1620} height={1080} alt="product image" src={image} />
      </div>
      <div className="px-2">
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
          <p id="SKU" className="text-sm">
            SKU: {sku}
          </p>

          <div id="description">
            <p>{description}</p>
            <p>
              <span className="italic text-sm">Net Weight: {weight}</span>
            </p>
          </div>

          <div id="order">
            <button id="addToCart"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
