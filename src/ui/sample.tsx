'use client'

import { useEffect, useRef } from 'react';

const VideoProcessor = () => {
  // Explicitly type videoRef as a reference to an HTMLVideoElement
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    // Example: Handling video playback quality
    videoElement.addEventListener('play', () => {
      const quality = videoElement.getVideoPlaybackQuality();
      console.log('Playback Quality:', quality);
    });

    // Example: Decoding video frames using WebCodecs API
    const handleVideoProcessing = async () => {
      const decoder = new VideoDecoder({
        output: (frame) => {
          console.log('Decoded frame:', frame);
          // Process the frame (e.g., apply effects)
          frame.close(); // Important to release the frame
        },
        error: (e) => console.error('Decoder error:', e),
      });

      // Note: This is a placeholder for actual encoded video data
      // You would need to get actual encoded chunks from a video file
      // Here, we're just simulating the process

      // Example: Using a dummy encoded video chunk
      const dummyEncodedChunk = new EncodedVideoChunk({
        type: 'key',
        timestamp: 0,
        data: new Uint8Array([]), // Normally this would be actual video data
      });

      decoder.decode(dummyEncodedChunk);
    };

    handleVideoProcessing();
  }, []);

  return (
    <video ref={videoRef} controls>
      <source src="file:///G:/Astro/Mars%20Generation/The.Mars.Generation.2017.720p.WEBRip.x264.AAC-[YTS.MX].mp4" type="video/mp4" />
    </video>
  );
};

export default VideoProcessor;
