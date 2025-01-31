import ProductCard from "./product-card";

const ProductList = ({data, title, limit}: {data: any[]; title?: string; limit?: number}) => {
  const limitedData = limit? data.slice(0, limit) : data;
  
  return (
    <section className="my-10 wrapper">
      <h2 className="h2-bold mb-4">
        {title}
      </h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {limitedData.map((product: any) => (
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