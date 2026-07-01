"use client";

import { useRouter } from "next/navigation";

export default function OrderPage() {
    const router = useRouter();
    const handleClick = () => {
        alert('Order placed successfully!');
        router.push('/');
    }
  return (
    <div>
      <h1>Order Page</h1>
      <p>Welcome to the order page. Here you can place your orders.</p>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}