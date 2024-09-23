'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/router'

const DropZoneButton = () => {
  const [media, setMedia] = useState<File | null>(null)
  const router = useRouter()

  const onDrop = (acceptedFiles: File[]) => {
    setMedia(acceptedFiles[0])
    const fileURL = URL.createObjectURL(acceptedFiles[0])

    router.push({
      pathname: '/play',
      query: { fileURL, fileName: acceptedFiles[0].name },
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'video/mp4': ['.mp4'],
      'video/x-matroska': ['.mkv'],
      'video/quicktime': ['.mov'],
      'video/x-msvideo': ['.avi'],
    }
  })

  return (
    <div {...getRootProps()} className="group p-5 cursor-pointer backdrop-blur-sm rounded-3xl outline outline-[0.2em] outline-slate-600 hover:outline-slate-200 outline-offset-[-10px] transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-stone-950 ">
      <div className='p-24 px-56 flex flex-col gap-3 items-center content-center '>
        <input {...getInputProps()} />
        <FontAwesomeIcon className="text-[3.5em]" icon={faMountainSun} />
        <p className="text-[1.25em] tracking-[3px] w-fit">Drop your movie here . .</p>
        <p className="text-[0.6em] font-medium tracking-[5px] w-fit uppercase">mp4 | mkv | mov | avi</p>
      </div>
    </div>
  )
}

export default DropZoneButton
