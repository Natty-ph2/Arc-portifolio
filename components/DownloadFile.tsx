// import React, { useState } from 'react';

// const DownloadFile = () => {
//   const [fileData, setFileData] = useState('Your file content goes here.');

//   const downloadFile = () => {
//     const blob = new Blob([fileData], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);

//     // Create a temporary anchor element
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'example.txt';

//     // Programmatically click the anchor to trigger the download
//     a.click();

//     // Clean up by revoking the Object URL
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <button onClick={downloadFile}>Download File</button>
//     </div>
//   );
// };

// export default DownloadFile;

import React from 'react';
import Link from 'next/link';

const DownloadFile = () => {
  return (
    <div>
     
      <Link href="ayalkbetf.pdf" passHref>
        
        <button>Resume</button>
        
        
      </Link>
    </div>
  );
};

export default DownloadFile;

