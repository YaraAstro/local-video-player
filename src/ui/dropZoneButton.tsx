import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'

const DropZoneButton = () => {
  return (
    <div className="p-10 text-[3em]">
        <FontAwesomeIcon className="text-[3em]" icon={faMountainSun} />
        <p className="text-[1.15em]">Drop your movie here..</p>
        <p className="text-[0.9em] uppercase">mp4|mkv|mov|avi</p>
    </div>
  )
}

export default DropZoneButton