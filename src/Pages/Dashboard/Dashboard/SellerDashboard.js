import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Category from '../Category/Category';

const SellerDashboard = () => {
    
    return (
        <div className=' grid lg:grid-cols-2 gap-10 px-24'>
            <Link className='mb-6 card-body text-white text-center bg-slate-600 ' to='/addproducts'>Add products</Link>
            <Link className='mb-6 card-body text-white text-center bg-slate-600 ' to='/myproducts'>My products</Link>        
            <label className='my-6 card-body text-white text-center  bg-slate-600 ' htmlFor="my-modal-6">Category</label>
            <Category></Category>
            

        </div>


    );
};

export default SellerDashboard;