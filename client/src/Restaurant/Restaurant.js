import React from 'react'
import { useParams } from 'react-router-dom';

const Restaurant = () => {
    const { restaurantId } = useParams();
  return (
    <div>Restaurant {restaurantId}</div>
  )
}

export default Restaurant