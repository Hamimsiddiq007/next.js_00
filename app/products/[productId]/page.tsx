export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </>
  );
}