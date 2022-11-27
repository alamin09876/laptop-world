import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const RequireSeller = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    if(isAdmin === 'seller' || isAdmin === 'admin'){
        return children;
    }
    console.log(isAdmin);
    return <p>Is not Available</p>
    
};

export default RequireSeller;