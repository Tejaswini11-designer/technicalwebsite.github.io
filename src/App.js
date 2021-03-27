import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import {Route,Switch,Redirect} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";


const App=() =>{
   return(
     
     <>
     <Navbar />
     <Switch>

     <Route exact path="/Home" component={Home} />
     <Route exact path="/About" component={About} />
     <Route exact path="/Services" component={Services} />
     <Route exact path="/Contact" component={Contact} />

     <Redirect to= "/"  />
     
     </Switch>
    
     </>

   );
 };

export default App;




