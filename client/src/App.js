// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"

import DashBoard from './AddBoxes/components/DashBoard';
import TabDash from "./TabbedDisplay/comps/TabDash"
import TicTacDash from "./TicTacToe/comps/Game"
import Subscribe from "./comps/Subscribe"
import RatingDash from "./Rating/comps/RatingDash"
import PassCode from "./PassCode/PassCode"
import RoutingDashBoard from "./Routing/DashBoard"
import Random from "./Routing/Random"
import Body from "./Routing/Body"
import Nested from "./Routing/Nested"
import DropDownDash from "./DropDown/DropDownDash"
import Circles from "./circles/Circles"
import Dictionary from "./dict/Dictionary"
import Credit from "./CreditCard/Credit"


function App() {
  return (
    <div className="App">

      {/* 
      <Routes>


        <Route exact path="/" element={<DashBoard props="proops" />} >

            <Route path="/random" element={<Random />} />
            <Route path="/body" element={<Body />} >

                 <Route path="/body/nested" element={<Nested />} />
                 <Route path="/body/random" element={<Random />} />


           </Route>

        </Route>


      </Routes> */}
      
        {/* <div className="border">
          <RoutingDashBoard />
        </div>

        <div className="border">
          <Circles />

        </div>


        <div>
          <Dictionary />
        </div>

        <div className="border">
          <PassCode />
        </div>

        <div className="border">
          <TabDash />
        </div>

        <div className="TicBody">
          <TicTacDash />
        </div>

        <div className="border">
          <Subscribe />
        </div>

        <div className="border">
          <RatingDash />
        </div> */}


        <div className="border">
          {/* <Credit /> */}
<DropDownDash />
        </div>

      </div>
  );
}

export default App;
