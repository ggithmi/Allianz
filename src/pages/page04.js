import React, { useState } from 'react';
import { styled } from '@mui/system';
import Web1Image from '../images/Frame2_web_1.jpg';  
import { Link } from 'react-router-dom';



const Frame21 = styled("div")({
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
    top: `300px`,
}); 

const Line1 = styled("div")({
  // ... styles for Line1 ...
  border: `3px solid rgba(255, 255, 255, 1)`,
  width: `145px`,
  height: `0px`,
  position: `absolute`,
  left: `100px`,
  top: `406px`,
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
  top: `427px`,
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

const InsuranceNumber = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `22px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `1210px`,
    top: `851px`,
});

const Rectangle11 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `435px`,
    height: `71px`,
    position: `absolute`,
    left: `1185px`,
    top: `886px`,
});

const Details = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `35px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `343px`,
    height: `56px`,
    position: `absolute`,
    left: `900px`,
    top: `70px`,
});

const Rectangle3 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `425px`,
    height: `41px`,
    position: `absolute`,
    left: `850px`,
    top: `180px`,
});

const CustomerName = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `880px`,
    top: `150px`,
}); 

const Rectangle5 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `425px`,
    height: `41px`,
    position: `absolute`,
    left: `850px`,
    top: `260px`,
});

const EmailAddress = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `880px`,
    top: `230px`,
});  

const InsertYourEmailAddress = styled("div")({
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
    left: `870px`,
    top: `260px`,
  });

const EmailInput = styled("input")({
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

const InsuranceNumber1 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `880px`,
    top: `310px`,
});

const Rectangle6 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `425px`,
    height: `41px`,
    position: `absolute`,
    left: `850px`,
    top: `340px`,
});

const InsuranceNumber2 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `880px`,
    top: `390px`,
});

const Rectangle9 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `425px`,
    height: `41px`,
    position: `absolute`,
    left: `850px`,
    top: `420px`,
});

const InsuranceNumber3 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `880px`,
    top: `470px`,
});

const Rectangle10 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `425px`,
    height: `41px`,
    position: `absolute`,
    left: `850px`,
    top: `500px`,
});

const InsuranceNumber4 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `257px`,
    height: `24px`,
    position: `absolute`,
    left: `880px`,
    top: `550px`,
});

const Rectangle12 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 0.35)`,
    borderRadius: `53px`,
    width: `425px`,
    height: `41px`,
    position: `absolute`,
    left: `850px`,
    top: `580px`,
});

const Rectangle4 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `150px`,
    height: `40px`,
    position: `absolute`,
    left: `270px`,
    top: `565px`,
});

const SignUpButton = styled("button")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `128px`,
    height: `26px`,
    position: `absolute`,
    left: `280px`,
    top: `572px`,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    '&:active, &:focus': {
    border: 'none',
    outline: 'none',
    },
});

const Rectangle7 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `150px`,
    height: `40px`,
    position: `absolute`,
    left: `450px`,
    top: `565px`,
});

const HelpButton = styled("button")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `128px`,
    height: `26px`,
    position: `absolute`,
    left: `460px`,
    top: `572px`,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    '&:active, &:focus': {
    border: 'none',
    outline: 'none',
    },
});

const Rectangle8 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `150px`,
    height: `40px`,
    position: `absolute`,
    left: `90px`,
    top: `565px`,
});

const PreviousButton = styled("button")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Montserrat`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `128px`,
    height: `26px`,
    position: `absolute`,
    left: `100px`,
    top: `572px`,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    '&:active, &:focus': {
    border: 'none',
    outline: 'none',
  },
});

const Slice1 = styled("div")({
    width: `100px`,
    height: `100px`,
    position: `absolute`,
    left: `1237px`,
    top: `491px`,
});

function Frame4() {  

    // State to store the customer's Email Address
  const [emailAddress, setEmailAddress] = useState('');

  // Function to handle changes in the input field
  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };


    // Function to handle sign-up button click
  const handleSignUpClick = () => {
    
    console.log('Customer Email Address:', emailAddress);
  }; 

  // Function to handle help button click
  const handleHelpClick = () => {

    console.log('Customer Email Address:', emailAddress);
  }; 

// Function to handle previous click
const handlePreviousClick = () => {
    
    console.log('Customer Email Address:', emailAddress);
  };
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
            <InsuranceNumber>
                {`INSURANCE NUMBER`}
            </InsuranceNumber>
            <Rectangle11>
            </Rectangle11>
            <Details>
                {`Details`}
            </Details>
            <Rectangle3>
            </Rectangle3>

            <CustomerName>
                {`CUSTOMER NAME`}
            </CustomerName> 
            <Rectangle5>
            </Rectangle5>
            <EmailAddress>
                {`EMAIL ADDRESS`}
            </EmailAddress> 
            <InsertYourEmailAddress>
            <EmailInput
          type="text"
          value={emailAddress}
          onChange={handleEmailAddressChange}
          placeholder="-Insert your Email Address -"
        />  
        </InsertYourEmailAddress>
            <InsuranceNumber1>
                {`INSURANCE NUMBER`}
            </InsuranceNumber1>
            <Rectangle6>
            </Rectangle6>
            <InsuranceNumber2>
                {`INSURANCE PERIOD`}
            </InsuranceNumber2>
            <Rectangle9>
            </Rectangle9>
            <InsuranceNumber3>
                {`ENGINE NUMBER`}
            </InsuranceNumber3>
            <Rectangle10>
            </Rectangle10>  
            <InsuranceNumber4>
                {`VEHICLE NUMBER`}
            </InsuranceNumber4>
            <Rectangle12>
            </Rectangle12>
            <Rectangle4>
            </Rectangle4>

            <Link to="/cameraDetect">
            <SignUpButton onClick={handleSignUpClick}>
                {`NEXT`}
            </SignUpButton>
            </Link>

            <Rectangle7>
            </Rectangle7>
            <HelpButton onClick={handleHelpClick}>
                {`HELP`}
            </HelpButton>
            <Rectangle8>
            </Rectangle8>

            <Link to="/selectvehicle">
            <PreviousButton onClick={handlePreviousClick}>
                {`PREVIOUS`}
            </PreviousButton>
            </Link>
            <Slice1>
            </Slice1>
        </Frame21>);
    }

export default Frame4;
