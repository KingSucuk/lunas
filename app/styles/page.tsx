'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STYLES = [
  'Pop Art',
  'Renaissance',
  'Watercolor',
  'Cubism',
  'Comic',
  'Oil Painting',
  'Sketch',
  'Neon',
  'Cyberpunk',
  'Fantasy',
  'Impressionism',
];

export default function StylePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  function toggle(style: string) {
    setSelected((prev) =>
      prev.includes(style)
        ? prev.filter((s) => s !== style)
        : prev.length < 10
        ? [...prev, style]
        : prev
    );
  }

  function checkout() {
    if (selected.length === 0) return alert('Select at least one style');
    router.push('/checkout');
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold">Choose Styles</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {STYLES.map((style) => (
          <label key={style} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.includes(style)}
              onChange={() => toggle(style)}
            />
            <span>{style}</span>
          </label>
        ))}
      </div>
      <button
        onClick={checkout}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Checkout
      </button>
    </main>
  );
}
