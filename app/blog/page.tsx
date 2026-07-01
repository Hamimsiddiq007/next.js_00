import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
}

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay for 3 seconds");
    }, 3000)
  });
  return <h1>Blog page</h1>;
}