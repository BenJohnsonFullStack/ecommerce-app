import { getProducts } from "@/data/cms/Products";

const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET);

export const POST = async (req) => {
  const cart = await req.json();

  let cartMap = new Map(
    cart.map((item) => [item.sku, { sku: item.sku, quantity: item.quantity }])
  );

  const data = await getProducts();
  const products = data.items;

  products.map((product) => {
    const skuToUpdate = product.fields.sku;

    if (cartMap.has(skuToUpdate)) {
      let updatedCartItem = cartMap.get(skuToUpdate);
      updatedCartItem = { ...updatedCartItem, id: product.fields.productName };
      cartMap.set(skuToUpdate, updatedCartItem);
    }
  });

  console.log(cartMap);

  return new Response(JSON.stringify(cart));

  //   let lineItems = [];
};
