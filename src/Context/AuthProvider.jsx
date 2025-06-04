import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const sharedAuths = {
        name : "Rafi"
    }

    return (
       <AuthContext value={sharedAuths}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;