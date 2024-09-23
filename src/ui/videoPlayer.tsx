import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  fileURL: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ fileURL }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSubtitles, setShowSubtitles] = useState(false); // Toggle for subtitle modal

  const toggleSubtitles = () => {
    setShowSubtitles(!showSubtitles);
  };

  return (
    <div className='relative w-full'>
      {fileURL ? (
        <>
          <video
            ref={videoRef}
            controls
            className='w-full h-auto rounded-lg shadow-lg'
            src={fileURL}
          >
            {/* Add subtitle track */}
            <track kind="subtitles" src="/path/to/subtitles.vtt" srcLang="en" default />
          </video>

          {/* Subtitle pop-up modal */}
          {showSubtitles && (
            <div className='absolute top-0 right-0 p-4 bg-white bg-opacity-75 rounded-lg shadow-lg'>
              <h2 className='text-lg font-semibold'>Subtitles</h2>
              {/* Subtitle content here */}
              <p className='mt-2'>Subtitle text will go here...</p>
              <button
                onClick={toggleSubtitles}
                className='mt-4 text-blue-500 underline'
              >
                Close
              </button>
            </div>
          )}

          <button
            onClick={toggleSubtitles}
            className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg'
          >
            Toggle Subtitles
          </button>
        </>
      ) : (
        <p className='text-red-500'>No video file selected.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
