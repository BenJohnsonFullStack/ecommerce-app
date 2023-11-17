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
          <div key={product.sys.id} className="mt-6 grid gap-4">
            <ProductCard
              id={product.fields.id}
              title={product.fields.productName}
              sku={product.fields.sku}
              price={product.fields.price}
              description={product.fields.productDescription}
              weight={product.fields.productWeight}
              image={`https:${product.fields.productImage.fields.file.url}`}
            />
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Store;
