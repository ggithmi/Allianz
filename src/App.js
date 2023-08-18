import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page01 from './pages/page01'; // import first page
import Page02 from './pages/page02'; // import second page
import Page03 from './pages/page03'; // import third page
import Page04 from './pages/page04'; // import forth page
import Page05 from './pages/page05'; // import fifth page
import Page06 from './pages/page06'; // import sixth page
import CustomWebcam from './pages/CustomWebcam'; // import seventh page
import FileUpload from './pages/fileupload'; // import eight page


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Update the route path to "/homepage" */}
        <Route path="/" element={<Page01 />} />
        <Route path="/NIC" element={<Page02 />} />
        <Route path="/OTP" element={<Page03 />} />
        <Route path="/selectvehicle" element={<Page05 />} />
        <Route path="/autofill" element={<Page04 />} />
        <Route path="/cameraDetect" element={<Page06 />} />
        <Route path="/cameraopen" element={<CustomWebcam />} />
        <Route path="/fileupload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
