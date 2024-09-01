import React from 'react'

const TopicBox = ({details}: any) => {
  return (
    <div className='flex items-start gap-6'>
      <img src={details.posterPath} alt="official-poster" />
      <div>
        <h3>{details.topic}</h3>
        <p>{details.description}</p>
      </div>
    </div>
  )
}

export default TopicBox