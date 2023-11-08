import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/cms/Products";

const Store = async () => {
  const data = await getProducts();
  const products = data.items;

  return (
    <>
      <Header />
      <main>
        {products.map((product) => (
          <ProductCard
            key={product.sys.id}
            title={product.fields.productName}
            sku={product.fields.sku}
            price={product.fields.price}
            description={product.fields.productDescription}
            weight={product.fields.productWeight}
            image={`https:${product.fields.productImage.fields.file.url}`}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Store;
