'use client';

import { ThisMedia } from '@/context/mediaProvider';
import DropZoneButton from '@/ui/dropZoneButton'; // Ensure this path is correct
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Home() {

  const { setMedia } = ThisMedia()
  const router = useRouter();

  const onDrop = (allowFiles: File[]) => {
    setMedia(allowFiles[0])
    router.push('/play')
  }

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
