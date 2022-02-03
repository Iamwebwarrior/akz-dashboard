import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";

function Sidebar() {
  return (
    <div>
      <div className="wrapper1">
          <div className="section">
              <div className="title">Dashboard</div>
              <ul>
                  <li><LineStyle/>Home</li>
                  <li><LineStyle/>Analytics</li>
                  <li><LineStyle/>sales</li>
                  <li><LineStyle/>report</li>
              </ul>
          </div>

          <div className="section">
              <div className="title">menu</div>
              <ul>
                  <li><LineStyle/>users</li>
                  <li><LineStyle/>products</li>
                  <li><LineStyle/>trnsactions</li>
              </ul>
          </div>

          <div className="section">
              <div className="title">notifications</div>
              <ul>
                  <li><LineStyle/>mail</li>
                  <li><LineStyle/>feedback</li>
                  <li><LineStyle/>reports</li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
