import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const getProducts = async () => {
  const products = await client.getEntries();
  return products;
};

export { getProducts };
