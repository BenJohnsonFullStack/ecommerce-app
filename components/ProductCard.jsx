import Image from "next/image";

const ProductCard = ({ title, sku, price, description, weight, image }) => {
  return (
    <div id="card">
      <div id="image" className="w-20">
        <Image width={1920} height={1080} alt="product image" src={image} />
      </div>
      <div id="details">
        <div id="flex">
          <div id="headers">
            <h2 id="title">{title}</h2>
            <p id="SKU">{sku}</p>
          </div>

          <div>
            <h3 id="price">{price}</h3>
          </div>
        </div>

        <div id="description">
          <p>{description}</p>
          <p>
            <span>{weight}</span>
          </p>
        </div>

        <div id="order">
          <button id="addToCart"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
