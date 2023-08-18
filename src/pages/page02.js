import React, { useState } from 'react';
import { styled } from '@mui/system';
import Web1Image from '../images/Frame2_web_1.jpg';
import { Link } from 'react-router-dom';

const Frame21 = styled("div")({
  // ... styles for Frame21 ...
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1536px`,
  height: `736px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Rectangle1 = styled("div")({
  // ... styles for Rectangle1 ...
  backgroundColor: `rgba(24, 32, 82, 1)`,
  width: `1920px`,
  height: `1080px`, 
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Web1 = styled("img")({
  // ... styles for Web1 ...
  height: `1080px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const YourVehicle = styled("div")({
  // ... styles for YourVehicle ...
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
  // ... styles for Rectangle2 ...
  backgroundColor: `rgba(255, 255, 255, 0.22)`,
  borderRadius: `53px`,
  width: `527px`,
  height: `630px`, 
  position: `absolute`,
  left: `800px`,
  top: `60px`,
});

const Login = styled("div")({
  // ... styles for Login ...
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
  // ... styles for Rectangle3 ...
  backgroundColor: `rgba(255, 255, 255, 0.35)`,
  borderRadius: `53px`,
  width: `435px`,
  height: `71px`,
  position: `absolute`,
  left: `850px`,
  top: `300px`,
});

const NicNumber = styled("div")({
  // ... styles for NicNumber ...
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

const InsertYourNicNumber = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `italic`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `19px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `317px`,
  height: `39px`,
  position: `absolute`,
  left: `900px`,
  top: `320px`,
});

const NicInput = styled("input")({
  // Add styles for the input field here, if needed.
  width: `100%`,
  height: `100%`,
  border: `none`,
  backgroundColor: `transparent`,
  color: `rgba(255, 255, 255, 1)`,
  outline: `none`,
  fontSize: `19px`,
  fontStyle: `bold`,
});

const Rectangle4 = styled("div")({
  // ... styles for Rectangle4 ...
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
  backgroundColor: `rgba(239, 107, 72, 1)`,
  borderRadius: `45px`,
  width: `219px`,
  height: `53px`,
  position: `absolute`,
  left: `940px`,
  top: `500px`,
  border: `none`,
  cursor: `pointer`,
  fontFamily: `Montserrat`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const ErrorMessage = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(239, 107, 72, 1)`, // Red color for error message
  fontStyle: `bold`,
  fontFamily: `Times New Roman`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `100%`,
  marginTop: `14px`,
});

const BlurredButton = styled(SignUpButton)({
  filter: 'blur(2px)',
  pointerEvents: 'none',
});

function Frame2() {
  // State to store the customer's NIC number
  const [nicNumber, setNicNumber] = useState('');
  const [nicExists, setNicExists] = useState(false);

  // Function to handle changes in the input field
  const handleNicNumberChange = (event) => {
    const newValue = event.target.value;

    if (/^[0-9]{0,11}[vV123456789]?$/.test(newValue)) {
      setNicNumber(newValue);
    }
  };

// Function to handle sign-up button click
  const handleSignUpClick = async () => {
    // Do something with the customer's NIC number here, like submitting it to a server.
    if (nicNumber.length === 10 || nicNumber.length === 12) {
      try {
        const response = await fetch('/validate-nic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nicNumber }),
        });

        const data = await response.json();
        setNicExists(data.exists);

        // Other logic, navigation, etc.
      } catch (error) {
        console.error('Error validating NIC number:', error);
      }
    } else {
      console.log('Invalid NIC number length');
    }
  };

  const isButtonBlurred = nicNumber.length !== 10 && nicNumber.length !== 12;

  return (
    <Frame21>
      <Rectangle1>
      </Rectangle1>
      <Web1 src={Web1Image} loading='lazy' alt={"web 1"}/>
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
      <Login>
        {`Login`}
      </Login>
      <Rectangle3>
      </Rectangle3>
      <NicNumber>
        {`NIC Number`}
      </NicNumber>

      // checking NIC number has 10 or 12 characters
      <InsertYourNicNumber>
        <NicInput
          type="text"
          value={nicNumber}
          onChange={handleNicNumberChange}
          placeholder="-Insert your NIC Number -"
        />
       {nicNumber.length !== 10 && nicNumber.length !== 12 && (
          <ErrorMessage>NIC number must be 10 or 12 characters</ErrorMessage>
        )}
      </InsertYourNicNumber>

      <Rectangle4>
      </Rectangle4>
      <Link to="/OTP">
      {nicNumber ? (
        <SignUpButton onClick={handleSignUpClick} disabled={isButtonBlurred}>
          {`Sign Up`}
        </SignUpButton>
      ) : (
        <BlurredButton>
          {`Sign Up`}
        </BlurredButton>
        
      )}
      </Link>
    </Frame21>
  );
}

export default Frame2;
