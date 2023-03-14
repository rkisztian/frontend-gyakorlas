import React, { Component } from "react";
import {
  Box,
} from "./FooterStyles";


export default class Footer  extends Component<{}>{
    
    render(){
        return(
            <Box>
              <h2 style={{ color: "grey", 
                           textAlign: "center", 
                           marginTop: "-0px" }}>
                Radeczki Krisztián 2023.03.14
              </h2>
        
            </Box>
          );

    }

}
  
