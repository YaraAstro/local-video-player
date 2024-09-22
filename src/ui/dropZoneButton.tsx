'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import Dropzone from 'react-dropzone'


const ButtonContent = () => {
  return (
    <div className="group p-5 cursor-pointer backdrop-blur-sm rounded-3xl outline outline-[0.2em] outline-slate-600 hover:outline-slate-200 outline-offset-[-10px] transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-stone-950 ">
      <div className='p-24 px-56 flex flex-col gap-3 items-center content-center '>
        <FontAwesomeIcon className="text-[3.5em]" icon={faMountainSun} />
        <p className="text-[1.25em] tracking-[3px] w-fit">Drop your movie here . .</p>
        <p className="text-[0.6em] font-medium tracking-[5px] w-fit uppercase">mp4 | mkv | mov | avi</p>
      </div>
    </div>
  )
}

const DropZoneButton = () => {
  return (
    <Dropzone>
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <ButtonContent />
        </div>
      )}
    </Dropzone>
  );
}

export default DropZoneButton