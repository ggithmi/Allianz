import { useCallback, useRef, useState } from "react"; // import useCallback
import { styled } from '@mui/system';
import Webcam from 'react-webcam';
import Web1Image from '../images/Frame2_web_1.jpg';
import { VscDeviceCamera } from "react-icons/vsc";
import { TfiGallery } from "react-icons/tfi";
import { Link } from 'react-router-dom';


const Frame71 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1460px`,
    height: `705px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});



const Rectangle7 = styled("div")({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    width: `1920px`,
    height: `1080px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const StyledWebcam = styled(Webcam)({
    height: `1080px`,
    width: `1920px`,
    objectFit: `cover`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
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
    
    border: `3px solid rgba(255, 255, 255, 1)`,
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
    top: `40px`,
});

const DamageArea = styled("div")({
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
    top: `80px`,
});

const Rectangle4 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `219px`,
    height: `37px`,
    position: `absolute`,
    left: `950px`,
    top: `440px`,
});

const Rectangle9 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `219px`,
    height: `37px`,
    position: `absolute`,
    left: `950px`,
    top: `520px`,
});

const Rectangle8 = styled("div")({
    backgroundColor: `rgba(239, 107, 72, 1)`,
    borderRadius: `45px`,
    width: `219px`,
    height: `37px`,
    position: `absolute`,
    left: `950px`,
    top: `600px`,
});

const VertualAssesorButton = styled("button")({
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
    width: `211px`,
    height: `26px`,
    position: `absolute`,
    left: `960px`,
    top: `520px`, 
    background: 'transparent',
    border: `none !important`, // Remove the border
    outline: `none !important`, // Remove the outline when button is focused
});

const UploadPhotoButton = styled("button")({
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
    width: `193px`,
    height: `26px`,
    position: `absolute`,
    left: `960px`,
    top: `440px`,
    background: 'transparent',
    border: `none !important`, // Remove the border
    outline: `none !important`, // Remove the outline when button is focused
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
    left: `993px`,
    top: `600px`,
    background: 'transparent',
    border: `none !important`, // Remove the border
    outline: `none !important`, // Remove the outline when button is focused
});



// this is for upload phpto
const Ellipse3 = styled("button")({
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
    height: `82px`,
    width: `90px`,
    padding: `5px`, // Add padding to create space for the border
    position: `absolute`,
    left: `920px`,
    top: `227.5px`,
    background: 'transparent',
    border: `none`, // Remove the border
    outline: `none !important`, // Remove the outline when button is focused
    "&:hover": {
      border: `2px solid orange`, // Add border on hover
      borderRadius: '5px',
    },
});


// this is for upload from gallery as file
const Ellipse4 = styled("button")({
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
  height: `82px`,
  width: `90px`,
  position: `absolute`,
  left: `1100px`,
  top: `237px`,
  padding: `5px`, // Add padding to create space for the border
  background: 'transparent',
  border: `none`, // Remove the border
  outline: `none !important`, // Remove the outline when button is focused
  flexDirection: 'column',
  alignItems: 'center', // Align the icon and text in the center
  "&:hover": {
    border: `2px solid orange`, // Add border on hover
    borderRadius: '5px',
  },
});




function cameraDetect() {  


    const uploadimagesfromcamera = () => {
      // Access uploaded images for all ellipses
      console.log('Ellipse3:', Ellipse3);
    };

    const uploadimageasfile = () => {
      // Access uploaded images for all ellipses
      console.log('Ellips4:', Ellipse3);
    };

  

  
    const handleVertualAssesorClick = () => {
      // Access uploaded images for all ellipses
      console.log('VertualAssesor:', VertualAssesorButton);
    };
    

    const handleUploadPhotoClick = () => {
      console.log('UploadPhoto:', UploadPhotoButton);
    };
    const handleNextClick = () => {
      console.log(' Next:',  NextButton);
    };



    return (
        <Frame71>
            <Rectangle7>
            </Rectangle7>
            <Rectangle1>
            </Rectangle1>
            {/* <StyledWebcam // Render the Webcam component
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            /> */}
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
            <DamageArea>
                {`Damage Area`}
            </DamageArea>
            <Rectangle4>
            </Rectangle4>
            <Rectangle9>
            </Rectangle9>
            <Rectangle8>
            </Rectangle8>
            <VertualAssesorButton onClick={handleVertualAssesorClick}>
                {`Vertual Assesor`}
            </VertualAssesorButton>
            <UploadPhotoButton onClick={handleUploadPhotoClick}>
                {`Upload Photo`}
            </UploadPhotoButton>
            <NextButton onClick={handleNextClick}>
                {`Next`}
            </NextButton>

            <Link to="/cameraopen">
            <Ellipse3 onClick={uploadimagesfromcamera} >
              <VscDeviceCamera size={70} style={{ marginBottom: '20px' }} />
              {'Capture Images'}
            </Ellipse3>
            </Link>

            <Link to="/fileupload">
            <Ellipse4 onClick={uploadimageasfile} >
              <TfiGallery size={60} style={{ marginBottom: '20px' }} />
              {'upload_From Device'}
            </Ellipse4>
            </Link>

        </Frame71>);
    }

export default cameraDetect;