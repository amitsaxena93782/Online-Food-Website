import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import "./search.css"
import { TextField, Checkbox, MenuItem, RadioGroup, Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import Restaurant from '../images/Restaurant.png'

const Search = () => {
  const { cuisineName } = useParams();

  const [location, setLocation] = useState('');

  const cuisines = ['North Indian', 'South Indian', 'Chinese', 'Fast Food', 'Street Food']

  const priceRange = ['Less than 500', '500 to 1000', '1000 to 1500', '1500 to 2000', 'More than 2000']

  const sort = ['Price low to high', 'Price high to low', 'Rating']

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(`Following Location is selected: ${event.target.value}`);
  }

  return (
    <div>
      <Nav />
      <div id='text'>{cuisineName} Places in Mumbai</div>
      <div id='mainSearch'>
        <div id='filter'>

          <div id='filter_heading'>Filters</div>
          <div className='sub_heading' id='select'>Select Location</div>
          <TextField select id="select_location" label="Select Location" variant="outlined" onChange={handleLocationChange} >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Andheri">Andheri</MenuItem>
          </TextField>
          <div className='sub_heading' id='cuisines'>Cuisines</div>
          {cuisines.map((cuisine) => {
            return (
              <div className='check'>

                <FormControlLabel control={<Checkbox />} label={cuisine} /><br />
              </div>
            )
          })}
          <div className='sub_heading'>Cost For Two</div>
          <RadioGroup
            name="costForTwo"
          >
            {priceRange.map((price) => {
              return (
                <div className='check'>
                  <FormControlLabel value={price} control={<Radio />} label={price} />
                </div>
              )
            })}
          </RadioGroup>

          <div className='sub_heading'>Sort</div>
          <RadioGroup
                  name="sort">
          {sort.map((sort) => {
            return (
              <div className='check'>
                  <FormControlLabel value={sort} control={<Radio />} label={sort} />
              </div>
            )
          })}
          </RadioGroup>
        </div>
          
          <div id='Restaurants'>

            <Link to={`/restaurant/1`} className='Restaurant'>
              <img className='res_img' src={Restaurant} alt="Can't load the image" />
              <div className='res_details'>
                <div className='res_name'>The Big Chill Cakery</div>
              <div className='res_loc'>FORT</div>
              <div className='address'><p> Shop 1, Plot D, Samruddhi Complex, Chincholi</p></div>
              </div>

              <div className='line' />
              
              <div className='res_cuisine'>CUISINES: <br/>COST FOR TWO:</div>
              <div className='res_cost'>Bakery <br/>Rs. 700</div>

            </Link>

            <div className='Restaurant'>
              <img className='res_img' src={Restaurant} alt="Can't load the image" />
              <div className='res_details'>
                <div className='res_name'>The Big Chill Cakery</div>
              <div className='res_loc'>FORT</div>
              <div className='address'><p> Shop 1, Plot D, Samruddhi Complex, Chincholi</p></div>
              </div>

              <div className='line' />
              
              <div className='res_cuisine'>CUISINES: <br/>COST FOR TWO:</div>
              <div className='res_cost'>Bakery <br/>Rs. 700</div>

            </div>
            <div className='Restaurant'>
              <img className='res_img' src={Restaurant} alt="Can't load the image" />
              <div className='res_details'>
                <div className='res_name'>The Big Chill Cakery</div>
              <div className='res_loc'>FORT</div>
              <div className='address'><p> Shop 1, Plot D, Samruddhi Complex, Chincholi</p></div>
              </div>

              <div className='line' />
              
              <div className='res_cuisine'>CUISINES: <br/>COST FOR TWO:</div>
              <div className='res_cost'>Bakery <br/>Rs. 700</div>

            </div>
            <div className='Restaurant'>
              <img className='res_img' src={Restaurant} alt="Can't load the image" />
              <div className='res_details'>
                <div className='res_name'>The Big Chill Cakery</div>
              <div className='res_loc'>FORT</div>
              <div className='address'><p> Shop 1, Plot D, Samruddhi Complex, Chincholi</p></div>
              </div>

              <div className='line' />
              
              <div className='res_cuisine'>CUISINES: <br/>COST FOR TWO:</div>
              <div className='res_cost'>Bakery <br/>Rs. 700</div>

            </div>

            <div id='page_nav'>This is page nav bar</div>
          </div>
          
      </div>
      
    </div>
  )
}

export default Search