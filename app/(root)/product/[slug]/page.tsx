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
  if (!product) notFound();

  return (
    <section className="wrapper flex flex-col md:flex-row">
      <div className="col-span-2 w-full">
        <ProductImages images={product.images!} />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full p-5">
            <div className="flex flex-col gap-6">
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                <em className="font-semibold">Brand: </em>
                {product.brand}
              </p>
              <p>
                <em className="font-semibold">Category: </em>
                {product.category}
              </p>
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
          </div>
          <div className="w-full p-5 mt-10 sm:mt-0">
            <p className="font-semibold">Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Card className="w-full sm:w-1/2">
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
