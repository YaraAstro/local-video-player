import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'

const DropZoneButton = () => {
  return (
    <div className="p-5 custom-dashed cursor-pointer transition-all duration-500 ease-in-out hover:scale-110">
      <div className='p-16 custom-dashed-right flex flex-col gap-3 items-center content-center '>
        <FontAwesomeIcon className="text-[3.5em]" icon={faMountainSun} />
        <p className="text-[1.25em] tracking-[3px] w-fit">Drop your movie here..</p>
        <p className="text-[0.6em] font-medium tracking-[5px] w-fit uppercase">mp4 | mkv | mov | avi</p>
      </div>
    </div>
  )
}

export default DropZoneButton