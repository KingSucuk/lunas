import { notFound } from 'next/navigation';
import Image from 'next/image';
/* eslint-disable @typescript-eslint/no-explicit-any */

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/results/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ResultsPage({ params }: any) {
  const data = await getData(params.id);
  if (!data) return notFound();

  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold">Your Portraits</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.images.map((url: string) => (
          <a key={url} href={url} target="_blank" className="border p-2">
            <Image src={url} alt="AI portrait" width={256} height={256} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </main>
  );
}
