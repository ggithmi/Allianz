import React, { useState, useEffect } from 'react';
import './FileUpload.css';

import defaultCarImage1 from '../images/1.png';
import defaultCarImage2 from '../images/2.png';
import defaultCarImage3 from '../images/3.jpg';
import defaultCarImage4 from '../images/4.jpg';
import defaultCarImage5 from '../images/5.jpg';
import defaultCarImage6 from '../images/6.jpg';


function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    setSelectedFiles([
      defaultCarImage1,
      defaultCarImage2,
      defaultCarImage3,
      defaultCarImage4,
      defaultCarImage5,
      defaultCarImage6,
      
    ]);
  }, []);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
  };

  const handleUpload = () => {
    console.log('Selected Files:', selectedFiles);
    setSelectedFiles([]);
  };

  return (
    <div>
      <h1>For Uploading Files</h1>
      <div className="upload-container">
        <input type="file" multiple onChange={handleFileChange} className="choose-file-button" />
        <button onClick={handleUpload} className="upload-button">Upload Files</button>
      </div>
      <div className="image-container">
        {selectedFiles.map((file, index) => (
          <div key={index} className={`image-item ${typeof file === 'string' ? 'default-image' : ''}`}>
            <img
              src={typeof file === 'string' ? file : URL.createObjectURL(file)}
              alt={`Car ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
