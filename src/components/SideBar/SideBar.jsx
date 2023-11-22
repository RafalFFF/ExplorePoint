import './sideBar.scss'


const SideBar = ({top, sidebar})=>{

    const sidebarStyles ={
        top:`${top}px`,
        height:`calc(100vh - ${top}px`,
    }   
    return(
       <div style={sidebarStyles}  className={sidebar ? "sidebar sidebar--active":"sidebar"}>

       </div>
    )
}

export default SideBar;