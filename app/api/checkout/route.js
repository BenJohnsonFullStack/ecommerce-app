const stripe = require("stripe")(process.env.STRIPE_TEST_SECRET);
import { getProducts } from "@/data/cms/Products";

export const POST = async (req) => {
  // await cartItem data from frontend
  const cart = await req.json();

  try {
    // convert data back to map for performance
    let cartMap = new Map(
      cart.products.map((item) => [
        item.sku,
        { sku: item.sku, quantity: item.quantity },
      ])
    );

    // get productData from cms
    const data = await getProducts();
    const products = data.items;

    // iterate over productDaya
    products.map((product) => {
      // find cart item
      const skuToUpdate = product.fields.sku;

      // update cartItem to include stripe price id
      if (cartMap.has(skuToUpdate)) {
        let updatedCartItem = cartMap.get(skuToUpdate);
        updatedCartItem = { ...updatedCartItem, id: product.fields.id };
        cartMap.set(skuToUpdate, updatedCartItem);
      }
    });

    // convert map back to array for Stripe delivery
    const stripeProducts = Array.from(cartMap.values());

    // Stripe requirement for data structure
    let lineItems = [];
    stripeProducts.forEach((product) => {
      lineItems.push({
        price: product.id,
        quantity: product.quantity,
      });
    });

    // create Stripe session
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: lineItems, // Stripe expects this
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/success`, // success redirect
      cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/cancel`, // cancel redirect
    });

    // return stripe session URL
    return new Response(
      JSON.stringify({
        url: stripeSession.url,
      })
    );
  } catch (err) {
    return new Response(JSON.stringify(err.message), { status: err.status });
  }
};
