import React from 'react'
import { useOutletContext } from 'react-router';
const HostVanPricing = () => {
    const [van, setvan] = useOutletContext([]);
    const { price } = van;

  return (
    <div><span className='font-bold'>${price}</span>/day</div>
  )
}

export default HostVanPricing