import React from 'react'
import { useOutletContext } from 'react-router';


const HostVanPhotos = () => {
    const [van] = useOutletContext([]);
    const { imageUrl ,name } = van;

  return (
    <div>
        <img className='w-[200px] rounded-md' src={imageUrl} alt={name}/>
    </div>
  )
}

export default HostVanPhotos