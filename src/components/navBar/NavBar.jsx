import { useState } from 'react'
import React from 'react'
import './navBar.scss'


const NavBar = ()=>{

  const [isClicked, setIsClicked] = useState(false);



    console.log(`Czy kliknięty ${isClicked}`);

    return (
        <div className='navigation'>
            <div className='navigation__right'>
              <span className='navigation__site-name'>ExplorePoint</span>
              <svg className={isClicked ? 'navigation__hamburger' : 'navigation__hamburger--active'} onClick={()=>setIsClicked(!isClicked)} width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7L7 7M20 7L11 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20 17H17M4 17L13 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M4 12H7L20 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>

            <div className="navigation__left">
             
            </div>
        </div>
      )
}

export default NavBar