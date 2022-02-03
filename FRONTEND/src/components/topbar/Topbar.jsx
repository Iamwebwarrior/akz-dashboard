import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div>
      <div className="wrapper">
          <div className="left"><div className="logo">Dashboard</div></div>
          <div className="right">
              <div className="icons"><NotificationsNone className="icon"/> <span className="spanlogo">5</span></div>
              <div className="icons"><Settings className="icon"/> <span className="spanlogo">5</span></div>
              <div className="icons"><Language className="icon"/> <span className="spanlogo">5</span></div>
              <div className="avatar"><img src="../../images/p4.jpg" alt=""/></div>
          </div>
      </div>
    </div>
  )
}

export default Topbar
