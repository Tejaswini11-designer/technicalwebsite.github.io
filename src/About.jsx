


import React from "react";
import { NavLink }  from "react-router-dom";
import aboutimg from "../src/images/aboutimg.jpg";
import Common from "./Common";
  const About = () => {
      return(
          <>
         <Common name="Welcome to About page"
          imgsrc={aboutimg}
           visit="/contact"
            btnname="Contact Now"/>
          </>
      );
  };
  export default About;
    



                          