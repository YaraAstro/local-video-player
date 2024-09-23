'use client';

import DropZoneButton from '@/ui/dropZoneButton'; // Ensure this path is correct
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Home() {
  const [media, setMedia] = useState<File | null>(null);
  const router = useRouter();

  const onDrop = (acceptedFiles: File[]) => {
    setMedia(acceptedFiles[0]);
    let path = URL.createObjectURL(acceptedFiles[0]);
    let name = acceptedFiles[0].name;

    // Navigate to play page with file URL and name
    router.push(`/play?path=${encodeURIComponent(path)}&name=${encodeURIComponent(name)}`);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': ['.mp4'],
      'video/x-matroska': ['.mkv'],
      'video/quicktime': ['.mov'],
      'video/x-msvideo': ['.avi'],
    },
  });

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div {...getRootProps()} className="p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer">
        <input {...getInputProps()} />
        <DropZoneButton />
      </div>
    </main>
  );
}
