import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getProducts = async () => {
  await client
    .getEntries()
    .then((entries) => console.log(entries))
    .catch(console.error);
};

export { getProducts };
