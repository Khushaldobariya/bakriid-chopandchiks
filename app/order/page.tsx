import OrderStep1 from "@/components/order/OrderStep1";
import OrderStep2 from "@/components/order/OrderStep2";

// Multi-step order page — steps managed via client state
// Split into separate route segments if needed: /order/step-1, /order/step-2
export default function OrderPage() {
  return (
    <>
      {/* Step 1 shown first; Step 2 revealed after */}
      <OrderStep1 />
      <OrderStep2 />
    </>
  );
}
