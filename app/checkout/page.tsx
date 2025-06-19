'use client';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const res = await fetch('/api/checkout', { method: 'POST' });
    const { sessionId } = await res.json();
    const stripe = await stripePromise;
    if (stripe) await stripe.redirectToCheckout({ sessionId });
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Pay with Stripe'}
      </button>
    </main>
  );
}
