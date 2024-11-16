// client/src/components/MediaGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MediaGallery = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      const res = await axios.get('http://localhost:5001/api/media');
      setMediaList(res.data);
    };
    fetchMedia();
  }, []);

  return (
    <div>
      {mediaList.map((media) => (
        <div key={media._id} style={{ marginBottom: '20px' }}>
          {media.type === 'image' ? (
            <img src={media.url} alt="media" style={{ width: '300px' }} />
          ) : (
            <video controls src={media.url} style={{ width: '300px' }}></video>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MediaGallery = () => {
//     const [mediaList, setMediaList] = useState([]);

//     useEffect(() => {
//         const fetchMedia = async () => {
//         const res = await axios.get('http://localhost:5000/api/media');
//         setMediaList(res.data);
//         };
//         fetchMedia();
//     }, []);

//     return (
//         <div>
//         {mediaList.map((media) => (
//             <div key={media._id}>
//             {media.type === 'image' ? (
//                 <img src={media.url} alt="media" />
//             ) : (
//                 <video controls src={media.url}></video>
//             )}
//             </div>
//         ))}
//         </div>
//     );
// };

// export default MediaGallery;
