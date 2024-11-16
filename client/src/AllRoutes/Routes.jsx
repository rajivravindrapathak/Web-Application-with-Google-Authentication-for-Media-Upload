import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MediaUpload from './MediaUpload';
import MediaUpload from '../components/MediaUpload';
// import MediaGallery from './MediaGallery';
import MediaGallery from '../components/MediaGallery';
// import GoogleAuth from './GoogleAuth';
import GoogleAuth from '../components/GoogleAuth';

const AllRoutes = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<GoogleAuth />} />
            <Route path="/upload" element={<MediaUpload />} />
            <Route path="/gallery" element={<MediaGallery />} />
        </Routes>
        </Router>
    );
};

export default AllRoutes;
