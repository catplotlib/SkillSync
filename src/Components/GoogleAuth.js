import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
    const navigate = useNavigate();

    const onSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        navigate("/dashboard");
    };

    const onError = () => {
        console.log('Login Failed');
    };

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onError}
        />
    );
};

export default GoogleAuth;
