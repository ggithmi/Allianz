import React, { useState, useRef } from 'react';
import Web1Image from '../images/Frame2_web_1.jpg';
import {styled} from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Frame51 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1517px`,
    height: `712px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

const Rectangle6 = styled("div")({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    width: `1920px`,
    height: `1080px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const Frame6 = styled("div")({
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
    top: `0px`,
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
  top: `60px`,
}); 

const Verification = styled("div")({
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

const EnterTheOtpNumber = styled("div")({
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
    width: `338px`,
    height: `24px`,
    position: `absolute`,
    left: `900px`,
    top: `250px`,
});

const InsertOtpNumber = styled("div")({
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
    top: `315px`,
}); 


const OtpInput = styled("input")({
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
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `219px`,
    height: `53px`,
    position: `absolute`,
    left: `940px`,
    top: `500px`,
});

const SubmitButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{
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
          border: `none`, // Add this line to remove the default button border.
          backgroundColor: `transparent`, // Add this line to remove the white box.
          cursor: `pointer`, // Add this line to show a pointer cursor on hover.
        }}
      >
        Submit
      </button>
    );
  };

  const OtpContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px", // Adjust this width as needed
    position: "absolute",
    left: "900px",
    top: "315px",
  });
  
  const OtpSquare = styled("input")({
    width: "40px", // Adjust the square size as needed
    height: "40px", // Adjust the square size as needed
    border: "1px solid rgba(0, 0, 0, 0.3)",
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    outline: "none",
    margin: "0 5px",
  });
  
function Frame3() { 
// State to store the customer's NIC number
const [otpNumber, setOtpNumber] = useState(['', '', '', '', '', '']);
const [error, setError] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const otpInputs = useRef([]);

const [isOtpComplete, setIsOtpComplete] = useState(false);

const handleOtpChange = (index, event) => {
  const newOtpNumber = [...otpNumber];
  newOtpNumber[index] = event.target.value;

  setOtpNumber(newOtpNumber);

  // Check if all OTP digits are entered
  const isComplete = newOtpNumber.every(digit => digit !== '');
  setIsOtpComplete(isComplete);

  if (newOtpNumber.some(digit => digit === '')) {
    setError(true);
    setErrorMessage('Please Enter the Correct OTP number');
  } else {
    setError(false);
    setErrorMessage('');
  }

  // Move focus to the next input or the previous one if deleting
  if (event.target.value === '' && index > 0) {
    otpInputs.current[index - 1].focus();
  } else if (event.target.value !== '' && index < otpNumber.length - 1) {
    otpInputs.current[index + 1].focus();
  }

};
// Function to handle sign-up button click
const handleSignUpClick = () => {
  if (!error && isOtpComplete) {
    const fullOtp = otpNumber.join('');
    console.log('Customer OTP Number:', fullOtp);
    // Do something with the complete OTP number, like submitting it to a server.
  }
};

const handleLinkClick = (e) => {
  if (!isOtpComplete) {
    e.preventDefault();
  }
};

    return (
    <Frame51>
    <Rectangle6>
    </Rectangle6>
    <Frame6>
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
                <Verification>
                    {`Verification`}
                </Verification>
                <Rectangle3>
                </Rectangle3>
                <EnterTheOtpNumber>
                    {`Enter the OTP Number`}
                </EnterTheOtpNumber> 
                <Rectangle4>
                </Rectangle4>
                <OtpContainer>
        {otpNumber.map((digit, index) => (
          <OtpSquare
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e)}
            ref={input => (otpInputs.current[index] = input)}
          />
        ))}
      </OtpContainer>
      {error && (
        <div style={{ color: 'rgba(239, 107, 72, 1)', marginTop: '10px', position: 'absolute', left: '900px', top: '370px' }}>{errorMessage}</div>
      )}
      <Link to="/selectvehicle" onClick={handleLinkClick}>
        {isOtpComplete ? (
          <SubmitButton onClick={handleSignUpClick} />
        ) : (
          <SubmitButton onClick={handleSignUpClick} disabled />
        )}
      </Link>
            </Frame6>
        </Frame51>);
    }

export default Frame3;
    