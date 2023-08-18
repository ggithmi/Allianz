import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import "./App.css";

const CustomWebcam = () => {
  const [mirrored, setMirrored] = useState(false);
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [facingMode, setFacingMode] = useState("user"); // "user" for front camera, "environment" for back camera

  const handleFacingModeChange = () => {
    setFacingMode(facingMode === "user" ? "environment" : "user");
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={500}
          width={500}
          ref={webcamRef}
          mirrored={mirrored}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
          facingMode={facingMode}
          audio={false} // Set to true if you want audio from the camera
          videoConstraints={{
            facingMode: facingMode === "user" ? "user" : { exact: "environment" },
          }}
        />
      )}
      <div className="controls">
        <div>
          <input
            type="checkbox"
            checked={mirrored}
            onChange={(e) => setMirrored(e.target.checked)}
          />
          <label>Mirror</label>
        </div>
        <button onClick={handleFacingModeChange}>
          Switch to {facingMode === "user" ? "Back" : "Front"} Camera
        </button>
      </div>
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;
