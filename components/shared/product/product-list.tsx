import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({data, title}: {data: Product[]; title?: string;}) => {  
  return (
    <section className="my-10 wrapper">
      <h2 className="h2-bold mb-4">
        {title}
      </h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>
            No product found
          </p>
        </div>
      )}
    </section>
  )
}

export default ProductList