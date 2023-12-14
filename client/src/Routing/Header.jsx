import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div id='Header' style={{border: "dotted black 2px"}}> 
         <p> Header </p> 
      
<Link to="/body" >body link in header</Link>
<br />
<Link to="/random" >Random link in header - renders in place of body</Link>
<p>when you clickme, body below will become random</p>
<br />
<p> render within body</p>
<Link to="/body/nested" >nested link in header -renders inside body</Link>
<br />
<Link to="/body/random" >random link in header -renders inside body</Link>


    </div>
  )
};

export default Header
