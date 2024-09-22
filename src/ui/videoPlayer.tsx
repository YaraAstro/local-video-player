import React from 'react'

const VideoPlayer = ({videoPath}: any) => {
  return (
    <div>
        <video className='' controls src={videoPath}>
        </video>
    </div>
  )
}

export default VideoPlayer