import { useContext, useEffect, useState,useRef } from 'react'
import {AppContext} from '../../context/Context';
import './navBar.scss'
import SideBar from '../SideBar/SideBar';

const NavBar = ()=>{

  const context = useContext(AppContext);
  
  const {darkMode,setDarkMode} = context;
  const {sidebar,setSidebar} = context;
  
  const [mobileSearch, setMobileSearch] = useState(false)


  const NavigationBar = useRef();

  const [NavbarHeight,setNavbarHeight] = useState(0)
  
  useEffect(()=>{
    if(NavigationBar.current){
        setNavbarHeight(NavigationBar.current.offsetHeight);
    }
  },[]);
   
  
  return (
        <div className='navigation' ref={NavigationBar}>
          <div className="navigation__wrapper">
            <div className='navigation__right'>
              <span className='navigation__site-name'>ExplorePoint</span>
              <button onClick={()=>setSidebar(!sidebar)} className={ sidebar ? "navigation__hamburger navigation__hamburger--active" : "navigation__hamburger" } onClick={()=>setSidebar(!sidebar)} aria-label="Main Menu">
                <svg width="32px" height="32px" viewBox="0 0 100 100">
                  <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            </div>
            <div className="navigation__left">
                <form className={mobileSearch ? "navigation__search-bar--active navigation__search-bar" :"navigation__search-bar"}>
                  <input type="text" placeholder='Wyszukaj zniacznik' />
                  <button type='submit' className='navigation__search-icon'>
                    <svg  width="18px" height="18px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#000000" /></svg>
                  </button >
                </form>
                <div className="navigation__notifications">
                  <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.31317 12.463C6.20006 9.29213 8.60976 6.6252 11.701 6.5C14.7923 6.6252 17.202 9.29213 17.0889 12.463C17.0889 13.78 18.4841 15.063 18.525 16.383C18.525 16.4017 18.525 16.4203 18.525 16.439C18.5552 17.2847 17.9124 17.9959 17.0879 18.029H13.9757C13.9786 18.677 13.7404 19.3018 13.3098 19.776C12.8957 20.2372 12.3123 20.4996 11.701 20.4996C11.0897 20.4996 10.5064 20.2372 10.0923 19.776C9.66161 19.3018 9.42346 18.677 9.42635 18.029H6.31317C5.48869 17.9959 4.84583 17.2847 4.87602 16.439C4.87602 16.4203 4.87602 16.4017 4.87602 16.383C4.91795 15.067 6.31317 13.781 6.31317 12.463Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.42633 17.279C9.01212 17.279 8.67633 17.6148 8.67633 18.029C8.67633 18.4432 9.01212 18.779 9.42633 18.779V17.279ZM13.9757 18.779C14.3899 18.779 14.7257 18.4432 14.7257 18.029C14.7257 17.6148 14.3899 17.279 13.9757 17.279V18.779ZM12.676 5.25C13.0902 5.25 13.426 4.91421 13.426 4.5C13.426 4.08579 13.0902 3.75 12.676 3.75V5.25ZM10.726 3.75C10.3118 3.75 9.97601 4.08579 9.97601 4.5C9.97601 4.91421 10.3118 5.25 10.726 5.25V3.75ZM9.42633 18.779H13.9757V17.279H9.42633V18.779ZM12.676 3.75H10.726V5.25H12.676V3.75Z" fill="#000000"/>
                  </svg>
                </div>
                <div onClick={()=>setMobileSearch(!mobileSearch)} className='navigation__search-mobile'>
                  <svg  width="24px" height="24px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#fff" /></svg>
                </div>
                <div className="navigation__dark-mode">
                <label className="navigation__dark-swtich"> 
                  <input onChange={()=>setDarkMode(!darkMode)} type="checkbox"/>
                  <span className ="navigation__dark-slider"></span>
                </label>
                </div>
                <div className='navigation__account'>
                  <svg fill="#000000" width="32px" height="32px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 14.5 C 32.4765 14.5 36.0390 18.4375 36.0390 23.1719 C 36.0390 28.2109 32.4999 32.0547 27.9999 32.0078 C 23.4765 31.9609 19.9609 28.2109 19.9609 23.1719 C 19.9140 18.4375 23.4999 14.5 27.9999 14.5 Z M 42.2499 41.8750 L 42.3202 42.1797 C 38.7109 46.0234 33.3671 48.2266 27.9999 48.2266 C 22.6093 48.2266 17.2655 46.0234 13.6562 42.1797 L 13.7265 41.8750 C 15.7655 39.0625 20.7812 35.9922 27.9999 35.9922 C 35.1952 35.9922 40.2343 39.0625 42.2499 41.8750 Z"/></svg>
                </div>
            </div> 
            </div>
            <SideBar top={NavbarHeight} sidebar={sidebar} /> 
        </div>
      )
}

export default NavBar