import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query, setQuery] = useState();
    const navigate = useNavigate();

    function handleSubmit(e){
      e.preventDefault();
      if (!query) return;
      navigate(`/order/${query}`);
      setQuery("")
    }
  return (
    <form onSubmit={handleSubmit}>
    <input className='rounded-full px-4 py-2 text-sm
     bg-yellow-100 placeholder:text-stone-400 sm:w-64s
     focus:w-72 sm:w-64 transition-all duration-300 focus:outline-none
     focus:ring-opacity-50
      focus:ring-yellow-500 sm:w-64
     ' 
     placeholder='Search order #' value={query} onChange={e => {setQuery(e.target.value)}}/>
    </form>
  )
}
