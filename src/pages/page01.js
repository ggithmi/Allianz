import React from 'react';
import {styled} from '@mui/material/styles'; 
import Web1Image from '../images/Frame2_web_1.jpg';
import { Link } from 'react-router-dom';



const Frame31 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1517px`,
    height: `713px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

const Rectangle5 = styled("div")({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    width: `1920px`,
    height: `1080px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const Frame4 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `1920px`,
    height: `1080px`,
    left: `0px`,
    top: `-3px`,
    overflow: `hidden`,
});

const Rectangle1 = styled("div")({
    backgroundColor: `rgba(24, 32, 82, 1)`,
    width: `1920px`,
    height: `1080px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const Web1 = styled("img")({
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
    border: `8px solid rgba(255, 255, 255, 1)`,
    width: `145px`,
    height: `0px`,
    position: `absolute`,
    left: `100px`,
    top: `427px`,
});

const ItsPreciousThatsWhyA = styled("div")({
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
    top: `60px`,
});

const WelcomeToVirtualAsse = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `64px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `345px`,
    height: `227px`,
    position: `absolute`,
    left: `900px`,
    top: `150px`,
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

const SignUpButton = styled("button")({
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
    filled: 'relative'
});

function page01() { 
  // Function to handle sign-up button click
  const handleSignUpClick = () => {
    // Do something with the customer's NIC number here, like submitting it to a server.
    console.log();
  };
return (
    <Frame31>
      <Rectangle5>
      </Rectangle5>
      <Frame4>
        <Rectangle1>
        </Rectangle1>
        <Web1 src={Web1Image} loading='lazy' alt={"web 1"} />
        <YourVehicle>
          {`Your Vehicle`}
        </YourVehicle>
        <Line1>
        </Line1>
        <ItsPreciousThatsWhyA>
          {`Its Precious, Thats Why Allianz`}
        </ItsPreciousThatsWhyA>
        <Rectangle2>
        </Rectangle2>
        <WelcomeToVirtualAsse>
          {`Welcome 
to 
Virtual Assessor`}
        </WelcomeToVirtualAsse>
        <Rectangle4>
        </Rectangle4>
        <Link to="/NIC">
        <button onClick={handleSignUpClick} style={{
          textAlign: 'center',
          whiteSpace: 'pre-wrap',
          color: 'rgba(255, 255, 255, 1)',
          fontStyle: 'normal',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          fontSize: '22px',
          letterSpacing: '0px',
          textDecoration: 'none',
          textTransform: 'none',
          width: '128px',
          height: '26px',
          position: 'absolute',
          left: '980px',
          top: '515px',
          backgroundColor: 'rgba(239, 107, 72, 1)', // Add any desired button background color
          borderRadius: '4px', // Add any desired border radius
          border: 'none', // Remove border
          cursor: 'pointer', // Add a cursor pointer on hover
        }}>
          Sign Up
          
        </button>
        </Link>
      </Frame4>
    </Frame31>
  );
}

export default page01;