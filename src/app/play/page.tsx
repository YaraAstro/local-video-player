import VideoPlayer from '@/ui/videoPlayer'
import React from 'react'

const Page = () => {
  return (
    <div className='flex align-top w-full h-screen'>
        <div className='flex-grow basis-2/3 flex flex-col '>
            <div className='flex-grow basis-2/3 flex items-center justify-center bg-yellow-400'>
                <VideoPlayer videoPath={''} />
            </div>
            <div className='flex-grow basis-1/3 flex items-center justify-center bg-orange-500'></div>
        </div>
        <div className='flex-grow basis-1/3 bg-zinc-100'></div>
    </div>
  )
}

export default Page