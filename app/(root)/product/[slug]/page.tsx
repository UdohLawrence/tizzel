import ProductImages from "@/components/product/product-images";
import ProductPrice from "@/components/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;

  const { slug } = params;

  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <section className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Images column */}
        <div className="col-span-2">
          <ProductImages images={product.images!} />
        </div>

        {/*Details column */}
        <div className="col-span-2 p-5">
          <p>
            {product.brand} {product.category}
          </p>
          <h1 className="h3-bold">{product.name}</h1>
          <p>
            {product.rating} of {product.numReviews} reviews
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ProductPrice
              value={Number(product.price)}
              className="w-24 rounded-full bg-green-100 text-green-700 px5 py2 text-center"
            />
          </div>
        </div>
        <div className="mt-10">
          <p>Description:</p>
          <p>{product.description}</p>
        </div>
        {/* Action Column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div>Status</div>
                <div>
                {product.stock > 0 ? (
                  <Badge variant="outline">Instock</Badge>
                ) : (
                  <Badge variant="destructive">Unavailable</Badge>
                )}
                </div>
              </div>
              {product.stock > 0 && (
                <div className="flex items-center justify-center">
                  <Button className="w-full">Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
