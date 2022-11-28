import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Category from '../Category/Category';

const SellerDashboard = () => {
    
    return (
        <div className='text-center my-6'>
            <Link className='mb-6' to='/addproducts'>Add products</Link><br></br>
            <Link className='mb-6' to='/myproducts'>My products</Link>
            <br></br>
            <label className='my-6 btn' htmlFor="my-modal-6">Category</label>
            
            <Category></Category>

        </div>


    );
};

export default SellerDashboard;