"use client";

import { useState } from "react";
import Script from "next/script";
import { Heart, Loader2 } from "lucide-react";

const AMOUNTS = [500, 1500, 5000, 15000];

type OrderApiResponse = {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
  donationId: string;
  error?: string;
};

type VerifyApiResponse = {
  success?: boolean;
  receiptNumber?: string;
  error?: string;
};

type RazorpayCheckoutHandlerResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayPaymentHandler = (response: RazorpayCheckoutHandlerResponse) => Promise<void>;

type RazorpayInstance = {
  on: (event: "payment.failed", handler: () => void) => void;
  open: () => void;
};

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description: string;
  prefill: { name: string; email: string };
  theme: { color: string };
  handler: RazorpayPaymentHandler;
  modal: { ondismiss: () => void };
};

type Status = "idle" | "processing" | "success" | "error";

export default function DonateForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [receiptNumber, setReceiptNumber] = useState<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  const selectedAmount = customAmount ? Number(customAmount) : amount;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!scriptReady || typeof window === "undefined" || !window.Razorpay) {
      setErrorMsg("Payment is still loading — please try again in a moment.");
      return;
    }
    if (!selectedAmount || selectedAmount < 1) {
      setErrorMsg("Enter a valid donation amount.");
      return;
    }

    setStatus("processing");

    try {
      const orderRes = await fetch("/api/donations/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, address, pan, amount: selectedAmount, frequency }),
      });
      const orderData = (await orderRes.json()) as OrderApiResponse & { error?: string };
      if (!orderRes.ok) throw new Error(orderData.error || "Could not start the donation.");

      const razorpay = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "Sri Sai Swamy Seva Foundation",
        description: frequency === "monthly" ? "Monthly donation" : "One-time donation",
        prefill: { name, email },
        theme: { color: "#0B0F8C" },
        handler: async (response: RazorpayCheckoutHandlerResponse) => {
          try {
            const verifyRes = await fetch("/api/donations/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = (await verifyRes.json()) as VerifyApiResponse;
            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.error || "We couldn't confirm your payment.");
            }
            setReceiptNumber(verifyData.receiptNumber ?? null);
            setStatus("success");
          } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Payment succeeded but confirmation failed. We'll follow up by email.";
            setErrorMsg(message);
            setStatus("error");
          }
        },
        modal: {
          ondismiss: () => setStatus("idle"),
        },
      });

      razorpay.on("payment.failed", () => {
        setErrorMsg("Payment failed or was cancelled. Please try again.");
        setStatus("error");
      });

      razorpay.open();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-marigold/40 bg-ivory-soft dark:bg-charcoal-soft p-10 text-center">
        <Heart className="mx-auto h-8 w-8 text-vermillion" fill="currentColor" strokeWidth={0} />
        <h2 className="mt-4 font-display text-2xl text-maroon dark:text-marigold">
          Thank you for your offering.
        </h2>
        <p className="mt-3 text-sm text-sandalwood dark:text-ivory-soft/70">
          Your ₹{selectedAmount.toLocaleString("en-IN")} {frequency === "monthly" ? "monthly " : ""}
          donation was received. Receipt #{receiptNumber} has been emailed to {email}.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setScriptReady(true)}
        strategy="afterInteractive"
      />
      <form onSubmit={handleSubmit} className="rounded-[28px] border border-maroon/10 bg-ivory-soft p-5 shadow-[0_18px_40px_rgba(11,15,140,0.04)] dark:border-marigold/15 dark:bg-charcoal-soft md:p-7 lg:min-h-full">
        <div className="flex w-fit rounded-full border border-maroon/20 bg-white/60 p-1 dark:border-marigold/25 dark:bg-charcoal">
          <button
            type="button"
            onClick={() => setFrequency("once")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              frequency === "once"
                ? "bg-maroon text-ivory shadow-sm dark:bg-marigold dark:text-charcoal"
                : "text-sandalwood dark:text-ivory-soft/70"
            }`}
          >
            Give once
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              frequency === "monthly"
                ? "bg-maroon text-ivory shadow-sm dark:bg-marigold dark:text-charcoal"
                : "text-sandalwood dark:text-ivory-soft/70"
            }`}
          >
            Monthly
          </button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustomAmount("");
              }}
              className={`rounded-xl border py-3.5 text-sm font-semibold transition-all ${
                !customAmount && amount === a
                  ? "border-marigold bg-marigold/15 text-maroon shadow-sm ring-1 ring-marigold/30 dark:text-marigold"
                  : "border-maroon/15 bg-white/60 text-sandalwood hover:border-marigold/50 hover:bg-marigold/5 dark:border-marigold/20 dark:bg-charcoal dark:text-ivory-soft/80"
              }`}
            >
              ₹{a.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        <div className="mt-5">
          <label htmlFor="custom-amount" className="text-[11px] font-medium uppercase tracking-[0.16em] text-sandalwood dark:text-ivory-soft/60">
            Or enter a custom amount (₹)
          </label>
          <input
            id="custom-amount"
            type="number"
            min={1}
            inputMode="numeric"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="e.g. 2500"
            className="mt-2 h-12 w-full rounded-xl border border-maroon/15 bg-white/60 px-4 text-sm text-charcoal outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/20 dark:border-marigold/20 dark:bg-charcoal dark:text-ivory"
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-[11px] font-medium uppercase tracking-[0.16em] text-sandalwood dark:text-ivory-soft/60">Full name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 h-12 w-full rounded-xl border border-maroon/15 bg-white/60 px-4 text-sm text-charcoal outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/20 dark:border-marigold/20 dark:bg-charcoal dark:text-ivory"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[11px] font-medium uppercase tracking-[0.16em] text-sandalwood dark:text-ivory-soft/60">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 w-full rounded-xl border border-maroon/15 bg-white/60 px-4 text-sm text-charcoal outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/20 dark:border-marigold/20 dark:bg-charcoal dark:text-ivory"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="address" className="text-[11px] font-medium uppercase tracking-[0.16em] text-sandalwood dark:text-ivory-soft/60">Address for receipt</label>
          <input
            id="address"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House / street, city, PIN"
            className="mt-2 h-12 w-full rounded-xl border border-maroon/15 bg-white/60 px-4 text-sm text-charcoal outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/20 dark:border-marigold/20 dark:bg-charcoal dark:text-ivory"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="pan" className="text-[11px] font-medium uppercase tracking-[0.16em] text-sandalwood dark:text-ivory-soft/60">PAN (optional)</label>
          <input
            id="pan"
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value.toUpperCase())}
            placeholder="e.g. ABCDE1234F"
            maxLength={10}
            className="mt-2 h-12 w-full rounded-xl border border-maroon/15 bg-white/60 px-4 text-sm uppercase text-charcoal outline-none transition focus:border-marigold focus:ring-2 focus:ring-marigold/20 dark:border-marigold/20 dark:bg-charcoal dark:text-ivory"
          />
        </div>

        {errorMsg && (
          <p className="mt-4 text-sm text-vermillion">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "processing"}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3.5 text-sm font-semibold text-ivory shadow-[0_14px_24px_rgba(11,15,140,0.18)] transition-all hover:-translate-y-0.5 hover:bg-maroon-light disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-marigold dark:text-charcoal dark:hover:bg-marigold-light"
        >
          {status === "processing" && <Loader2 className="h-4 w-4 animate-spin" />}
          Donate ₹{selectedAmount ? selectedAmount.toLocaleString("en-IN") : "0"}
          {frequency === "monthly" ? " / month" : ""}
        </button>
      </form>
    </>
  );
}
