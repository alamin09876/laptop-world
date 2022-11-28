import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Category from '../Category/Category';

const SellerDashboard = () => {
    
    return (
        <div className=' grid lg:grid-cols-3 '>
            <Link className='mb-6 card-body text-white text-center bg-slate-600 ' to='/addproducts'>Add products</Link>
            <Link className='mb-6 card-body text-white text-center bg-slate-600 ' to='/myproducts'>My products</Link>
        
            <Category></Category>
            <label className='my-6 card-body text-white text-center  bg-slate-600 ' htmlFor="my-modal-6">Category</label>
            

        </div>


    );
};

export default SellerDashboard;