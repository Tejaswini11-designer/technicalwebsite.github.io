import React from "react";
import { NavLink }  from "react-router-dom";
import img2 from "../src/images/img2.jpg";
import Common from "./Common";
  const Home = () => {
      return(
          <>
          <Common  name="Grow your buisness with"
          imgsrc={img2}
           visit="/Services"
            btnname="Get Started"/>
          </>
      );
  };
  export default Home;