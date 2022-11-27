import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Category from '../Category/Category';

const SellerDashboard = () => {
    
    return (
        <>
            <Link to='/addproducts'>Add products</Link><br></br>
            <Link to='/myproducts'>My products</Link>
            <label htmlFor="my-modal-6" className="btn">Category</label>
            <Category></Category>

        </>


    );
};

export default SellerDashboard;