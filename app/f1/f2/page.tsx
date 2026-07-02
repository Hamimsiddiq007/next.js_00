import Link from "next/link";

export default function F2Page() {
  return (
    <div>
      <h1>Welcome to the F2 Page</h1>
      <div>
        <Link href={"/f4"}>Go to F4 Page</Link>
      </div>
    </div>
  );
}