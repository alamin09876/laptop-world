import React, { Children, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const Require = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    if(isAdmin === 'user' || isAdmin === 'admin'){
        return children;
    }
    console.log(isAdmin);
    return <p>Is not Available</p>
    
};

export default Require;
