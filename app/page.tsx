import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Pet Portraits</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Upload your pet photos and choose artistic styles to generate unique portraits powered by AI.
        </p>
        <Link href="/upload" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </Link>
      </section>

      <section className="max-w-3xl text-center space-y-2">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="list-decimal list-inside space-y-1 text-left">
          <li>Upload 10&ndash;20 photos of your pet.</li>
          <li>Select up to 10 artistic styles.</li>
          <li>Checkout securely with Stripe.</li>
          <li>Receive an email when your portraits are ready.</li>
        </ol>
      </section>

      <section className="max-w-3xl text-center space-y-2">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="text-gray-600">$10 for 10 AI-generated portraits</p>
      </section>
    </main>
  );
}
