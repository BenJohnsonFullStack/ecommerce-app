import Image from "next/image";

const ProductCard = () => {
  return (
    <div id="card">
      <div id="image">
        <Image width={1920} height={1080} alt="product image" />
      </div>
      <div id="details">
        <div id="flex">
          <div id="headers">
            <h2 id="title"></h2>
            <p id="SKU"></p>
          </div>

          <div>
            <h3 id="price"></h3>
          </div>
        </div>

        <div id="description">
          <p></p>
        </div>

        <div id="order">
          <button id="addToCart"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
