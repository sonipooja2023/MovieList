import React, {useState } from 'react'
import "./movie.css"
function SearchMovie() {
    const [data,setData]=useState([]);
    const [year,setYear]=useState("");
    const handleSearch=()=>{
     fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
     .then(response=>response.json())
      .then((response)=>{
        setData(response.data);
        });
    }
 console.log(data);
  return (
    <div className='container'>
    <h1>Movie List</h1>
    <div className='search'>
    <input id="input" type="number" placeholder="Enter Year" value={year} onChange={(e)=>setYear(e.target.value)}/>
    <button id="searchBtn" onClick={handleSearch}>Search</button>
    </div>
    <h2>Movies {year}</h2>
    {data.length>0 ? data.map(i=><ul><li key={i.imdbID}>{i.Title}</li></ul>) : <div>No results Found</div>}
    </div>
  )
}
export default SearchMovie