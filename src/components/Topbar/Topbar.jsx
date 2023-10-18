import "./Topbar.css"
import {Search , Person , Chat , Notifications} from "@mui/icons-material";
const Topbar = () => {

  
  return (
    <>
    <div className="topbarContainer" >
    <div className="topbarLeft">
      <span className="logo" >
        Lamasocial
      </span>
    </div>
    
    <div className="topbarCenter">
      <div className="searchbar">
        <Search />
        <input placeholder="Search for friend, post or video" type="text" className="searchInput" />
      </div>
    </div>
    
    <div className="topbarRight">

      <div className="topbarlinks">

        <span className="topbarlink">Homepage</span>
        <span className="topbarlink">Timeline</span>


      </div>
      <div className="topbaricons">

        <div className="topbarIconItem">
        <Person/>
        <span className="topbarIconBadge">1</span>

      </div>
      <div className="topbarIconItem">
        <Chat/>
        <span className="topbarIconBadge">1</span>

      </div>
      <div className="topbarIconItem">
        <Notifications/>
        <span className="topbarIconBadge">1</span>

      </div>



      </div>
      <div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>

    </div>
    </div>

    </>

  )
}

export default Topbar