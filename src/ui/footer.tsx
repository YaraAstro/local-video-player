import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='absolute bottom-2 w-screen px-10 z-10 flex items-center justify-around'>
        {/* <p className='font-extralight text-[1.5em] -translate-x-[150px] opacity-25 tracking-[1px] text-emerald-500 sacramento'>Local Video Player</p>
        <div className='flex items-center justify-end gap-12 translate-x-[100px]'>
            <p className='text-[0.35em] tracking-[5px] poppins opacity-25 text-emerald-500'>By <span className='uppercase tracking-[5px] font-thin ml-2 poppins'>yara astro</span></p>
            <a href="https://github.com/YaraAstro/local-video-player"><FontAwesomeIcon className='text-[2em] opacity-25 text-emerald-500 transition-all duration-300 ease-in-out hover:opacity-100 hover:text-fuchsia-600' icon={faGithub} /></a>
        </div> */}
    </div>
  )
}

export default Footer