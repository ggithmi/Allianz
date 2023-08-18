import React, { useState } from 'react';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Web1Image from '../images/Frame2_web_1.jpg';
import { Link } from 'react-router-dom';

const Frame11 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1517px`,
    height: `705px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

const Rectangle1 = styled("div")({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    width: `1920px`,
    height: `1080px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const Web1= styled("img")({
    height: `1080px`,
    width: `1920px`,
    objectFit: `cover`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
}); 

const YourVehicle = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `70px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `468px`,
    height: `112px`,
    position: `absolute`,
    left: `100px`,
    top: `321px`,
});  

const Line1 = styled("div")({
    // ... styles for Line1 ...
    border: `3px solid rgba(255, 255, 255, 1)`,
    width: `145px`,
    height: `0px`,
    position: `absolute`,
    left: `100px`,
    top: `427px`,
  });  

  const ItsPreciousThatsWhyA = styled("div")({
    // ... styles for ItsPreciousThatsWhyA ...
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `400`,
    fontSize: `32px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `525px`,
    height: `73px`,
    position: `absolute`,
    left: `100px`,
    top: `448px`,
  }); 

const Rectangle2 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.22)`,
    borderRadius: `53px`,
    width: `527px`,
    height: `630px`,
    position: `absolute`,
    left: `800px`,
    top: `40px`,
});

const Vehicle = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `45px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `343px`,
    height: `56px`,
    position: `absolute`,
    left: `900px`,
    top: `150px`,
}); 


const Rectangle3 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `435px`,
    height: `71px`,
    position: `absolute`,
    left: `850px`,
    top: `300px`,
});

const SelectVehicle = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `25px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `900px`,
    top: `250px`,
});

const ComboBox = styled(Select)({
    // ...styles for ComboBox...
    width: `317px`,
    height: `39px`,
    position: `absolute`,
    left: `900px`,
    top: `320px`,
  });


const Rectangle4 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `219px`,
    height: `53px`,
    position: `absolute`,
    left: `940px`,
    top: `500px`,
});

const NextButton = styled("button")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `22px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `128px`,
    height: `26px`,
    position: `absolute`,
    left: `980px`,
    top: `515px`,
    background: `transparent`,
    cursor: `pointer`,
    border: `none !important`, // Remove the border
    outline: `none !important`, // Remove the outline when button is focused
  });
  


  function Frame5() {
    const [selectedVehicle, setSelectedVehicle] = useState('-Select-');
  
    const handleVehicleChange = (event) => {
      setSelectedVehicle(event.target.value);
    };
  
    const handleNextClick = () => {
      console.log('Next:', NextButton);
      console.log('Selected Vehicle:', selectedVehicle);
    };
  
    return (
      <Frame11>
        <Rectangle1></Rectangle1>
        <Web1 src={Web1Image} loading='lazy' alt={"web 1"} />
        <YourVehicle>
          Your Vehicle
        </YourVehicle>
        <Line1></Line1>
        <ItsPreciousThatsWhyA>
          Its Precious, Thats Why Allianz
        </ItsPreciousThatsWhyA>
        <Rectangle2></Rectangle2>
        <Vehicle>
          Vehicle
        </Vehicle>
        <Rectangle3></Rectangle3>
        <SelectVehicle>
          SELECT VEHICLE
        </SelectVehicle>
        <ComboBox value={selectedVehicle} onChange={handleVehicleChange}>
          <MenuItem value="-Select-">-Select-</MenuItem>
          <MenuItem value="No-01">WP-KV 3575</MenuItem>
          <MenuItem value="No-02">WP-BBK 3450</MenuItem>
          <MenuItem value="No-03">WP-KP 2000</MenuItem>
          {/* Add more options as needed */}
        </ComboBox>
        <Rectangle4></Rectangle4>
        <Link to="/autofill">
        <NextButton onClick={handleNextClick}>
          NEXT
        </NextButton>
        </Link>
      </Frame11>
    );
  }
  
  export default Frame5;
