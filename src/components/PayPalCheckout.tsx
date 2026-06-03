"use client";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useCartStore } from "@/lib/cart-store";
import { useRouter } from "next/navigation";

export default function PayPalCheckout({ amount }: { amount: string }) {
  const [{ isPending }] = usePayPalScriptReducer();
  const clearCart = useCartStore((s) => s.clearCart);
  const router = useRouter();

  if (isPending) {
    return (
      <div className="w-full h-12 bg-gray-200 rounded animate-pulse flex items-center justify-center text-sm text-gray-400">
        加载 PayPal...
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{ layout: "vertical", color: "black", shape: "rect", label: "pay" }}
      createOrder={(_data, actions) =>
        actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: amount,
              },
              description: "LUXE 时装订单",
            },
          ],
        })
      }
      onApprove={async (_data, actions) => {
        if (actions.order) {
          await actions.order.capture();
          clearCart();
          router.push("/order-success");
        }
      }}
      onError={(err) => {
        console.error("PayPal 支付错误:", err);
        alert("支付失败，请重试");
      }}
    />
  );
}
