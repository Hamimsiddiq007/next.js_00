import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: Promise<{productId: string}>;
};

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 1000);
  })
  return {
    title: `Product ${title}`
  }
}

export default async function ProductDetails({
  params,
}: Props) {
  const { productId } = await params;

  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </>
  );
}