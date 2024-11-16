// client/src/components/GoogleAuth.js


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleAuth = () => {
    const [user, setUser] = useState(null);

    const handleGoogleLogin = () => {
        window.open('http://localhost:5001/auth/google', '_self');
    };

    const handleLogout = () => {
        window.open('http://localhost:5001/logout', '_self');
    };

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('http://localhost:5001/auth/user', { withCredentials: true });
            setUser(res.data);
        };
        fetchUser();
    }, []);
    
    return (
        <div>
            {user ? (
                <>
                    <h3>Welcome, {user.name}</h3> 
                    <img src={user.picture} alt="Profile" />
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <button onClick={handleGoogleLogin}>Login with Google</button>
            )}
        </div>
    );
};

export default GoogleAuth;
