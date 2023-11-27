import React, { useEffect, useState } from 'react';
import './searchForm.scss'


const  SearchFomr = ({dupa}) => {

    //navigation__search-bar--dark-mode
    //mobileSearch
    const [cssClases, setCssclasses] = useState({
        basic: 'navigation__search-bar',
        isMobile: '',
        isDarkmode: '',
    });
    console.log(`mobile Seach w komponencie podrzędnym ${dupa}`);
    useEffect(()=>{
        console.log(`mobile Seach w komponencie w useEffect podobnym${dupa}`);
    },[dupa]);

  return (
    <form className={dupa ? "navigation__search-bar--active navigation__search-bar" :"navigation__search-bar"}>
        <input type="text" placeholder='Wyszukaj zniacznik' />
        <button type='submit' className='navigation__search-icon'>
        <svg  width="18px" height="18px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#000000" /></svg>
        </button >
    </form>
  )
}

export default SearchFomr