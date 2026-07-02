import Link from "next/link";

export default function F1Page() {
  return (
    <>
      <h1>Welcome to the F1 Page</h1>
      <div>
        <Link href={"/f1/f2"}>Go to F2 Page</Link>
      </div>
    </>
  );
}