// client/src/components/MediaUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const MediaUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5001/api/media/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Media uploaded successfully');
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default MediaUpload;


// import React, { useState } from 'react';
// import axios from 'axios';

// const MediaUpload = () => {
//     const [file, setFile] = useState(null);

//     const handleUpload = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//         await axios.post('http://localhost:5000/api/media/upload', formData);
//         alert('Media uploaded successfully');
//         } catch (error) {
//         console.error('Upload failed:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleUpload}>
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button type="submit">Upload</button>
//         </form>
//     );
// };

// export default MediaUpload;
