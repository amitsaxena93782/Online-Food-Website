import React from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import "./search.css"

const Search = () => {
    const { cuisineName } = useParams();
  return (
    <div>
        <Nav />
        <div id='text'>{cuisineName} Places in Mumbai</div>
    </div>
  )
}

export default Search