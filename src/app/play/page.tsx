'use client';

import VideoPlayer from '@/ui/videoPlayer';
import { useSearchParams } from 'next/navigation'; // Use this to read query params
import React from 'react';

const PlayPage = () => {
  const searchParams = useSearchParams();

  const fileURL = searchParams.get('path');
  const fileName = searchParams.get('name');

  return (
    <div className='flex align-top gap-2 w-full h-screen p-2'>
      <div className='flex-grow basis-2/3 flex flex-col gap-2'>
        <div className='flex-grow basis-2/3 flex items-center rounded-xl justify-center backdrop-blur-md'>
          <VideoPlayer fileURL={fileURL} />
        </div>
        <div className='flex-grow basis-1/3 flex items-center rounded-xl justify-center backdrop-blur'>
          <h1>{fileName}</h1>
          <p>{fileURL}</p>
        </div>
      </div>
      <div className='flex-grow basis-1/3 rounded-lg backdrop-blur bg-[#ffffff10]'></div>
    </div>
  );
};

export default PlayPage;
