import "./graphs.css";
import Charts from "../charts/Charts";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function Graphs() {
  return (
    <div>
      <div className="graphwrapper">
        <div className="graphsection">
          <div className="box1 box">
            <div className="boxTilt">Revenue</div>
            <div className="boxcostmain">
                <div className="boxCost">$12</div>
                <div className="bosPorfit">-11.4<ArrowDownward className="bosPorfit1"/></div>
            </div>
            <div className="boxCompare">comared to last month</div>
          </div>
          <div className="box2 box">
          <div className="boxTilt">Revenue</div>
            <div className="boxcostmain">
                <div className="boxCost">$12</div>
                <div className="bosPorfit">-11.4<ArrowDownward className="bosPorfit1"/></div>
            </div>
            <div className="boxCompare">comared to last month</div>
          </div>
          <div className="box3 box">
          <div className="boxTilt">Revenue</div>
            <div className="boxcostmain">
                <div className="boxCost">$12</div>
                <div className="bosPorfit">-11.4<ArrowDownward className="bosPorfit1"/></div>
            </div>
            <div className="boxCompare">comared to last month</div>
          </div>
        </div>


        <div className="sectiondisplaygraphs">
          <div className="displayUser">User Data Here</div>
          <Charts/>
        </div>


        <div className="displayusers">
          Displaying User Data
        </div>
      </div>
    </div>
  )
}

export default Graphs
