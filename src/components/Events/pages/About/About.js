import { Card } from "@material-ui/core";
import React from "react";

import './about.css'




const AboutPage = (props) => {
  
  return (
    <div>
    <Card className="db-content-box db-effect-h1" style={{backgroundColor:"#2326309f" ,color:"white"  }}>
      <div>
        <h1 className="hover hover-1" style={{textAlign:"center"}}>About {props.name}</h1>
      </div>
      <ul>
        <p>{props.about}</p>
      </ul>
    </Card>
    </div>
  )
};

export default AboutPage;
