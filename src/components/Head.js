import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_VIDEO_API } from '../utils/constants';

//This search is using Live API, Debouncing and Cache to store suggestions

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {

      // store and find to/from cache
      if(searchCache[searchQuery]){
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }

      // make an api call on each key rpess
    // if difference between 2 api call is <200 ms
    // decline the api calls
    // Debouncing
      
      getSearchSuggestion()}, 200);

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);

    // update cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  }



  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer' onClick={() => toggleMenuHandler()} alt='menu' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' />
        <img className='h-14 mx-2' alt='youtube-logo' src='data:image/png;base64,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' />
      </div>
      <div className='col-span-10 px-10'>
        <div>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
        type='text' 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'>🔍</button>
        </div>
        {showSuggestions && (<div className='absolute bg-white py-2 px-5 w-[28rem] border border-gray-100 rounded-md'>
          <ul>
            {suggestions.map((suggestion) => <li key={suggestion} className='py-2 shadow-sm hover:bg-gray-100'>🔍 {suggestion}</li>)}
          </ul>
        </div>)}
        
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user-icon' src='data:image/png;base64,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'/>

      </div>
    </div>
  )
}

export default Head;