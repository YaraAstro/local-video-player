import React, { createContext, ReactNode, useContext, useState } from 'react'

interface  MediaFileProps {
    media: File | null
    setMedia: (file: File | null ) => void
}

const MediaFile = createContext < MediaFileProps | undefined > ( undefined )

export const MediaProvider = ({children}:{children: ReactNode}) => {

    let [media, setMedia] = useState < File | null > (null)

  return (
    <MediaFile.Provider value={{ media, setMedia }}>
        {children}
    </MediaFile.Provider>
  )
}

export const ThisMedia = () => {

    let context = useContext(MediaFile)

    if (!context) {
        throw new Error('This must be used within a MediaProvider')
    }
  
    return context 
}

