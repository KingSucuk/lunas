'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();

  function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const list = Array.from(event.target.files).slice(0, 20);
    setFiles(list);
  }

  function start() {
    if (files.length < 10) return alert('Please upload at least 10 photos');
    router.push('/styles');
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-8 space-y-6">
      <h1 className="text-3xl font-bold">Upload Photos</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFiles}
        className="border p-4"
      />
      <p>{files.length} files selected</p>
      <button
        onClick={start}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Next
      </button>
    </main>
  );
}
