import VideoPlayer from '@/ui/videoPlayer'
import React from 'react'

const Page = () => {
  return (
    <div className='flex align-top gap-2 w-full h-screen p-2'>
        <div className='flex-grow basis-2/3 flex flex-col gap-2'>
            <div className='flex-grow basis-2/3 flex items-center rounded-xl justify-center backdrop-blur-md'>
                {/* player should be here */}
            </div>
            <div className='flex-grow basis-1/3 flex items-center rounded-xl justify-center backdrop-blur'></div>
        </div>
        <div className='flex-grow basis-1/3 rounded-lg backdrop-blur bg-[#ffffff10]'></div>
    </div>
  )
}

export default Page