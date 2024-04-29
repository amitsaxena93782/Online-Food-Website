import React from 'react';
import './bottom.css';
import { useEffect, useState } from 'react';
import './bottom.css';
import { Link } from 'react-router-dom';




const Bottom = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cuisines/getList')
      .then(response => response.json())
      .then(data => setCuisines(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className='bottom'>
      <div id='heading'>Quick Searches</div>
      <div className='text'>Discover restaurants by type of meal</div>
      <div id='cards'>
        {cuisines.map(cuisine => (
          <Link to={`cuisine/${cuisine.name}`} className='card' key={cuisine.id}>
            <img style={{ width: '50%', height: '100%', objectFit: 'cover' }} src={cuisine.img} alt={cuisine.name} />
            <div className='card-text' style={{ width: '50%', float: 'right' }}>
              <div className="cuisine">{cuisine.name}</div>
              <div className="cuisineText">{cuisine.text}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Bottom;
