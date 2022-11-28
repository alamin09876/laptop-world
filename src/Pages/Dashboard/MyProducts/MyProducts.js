import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Advertice from '../../Home/Advertice/Advertice';

const MyProducts = () => {
    const products = useLoaderData();
    const { user } = useContext(AuthContext)


    const handleAdvertice = product => {
        console.log(product)
        fetch(`http://localhost:5000/products/${product._id}?advertice=true`, {
            method: "PATCH",

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Advertice Successfully')
                console.log(data)
            })
    }

    const userFilters = products.filter(usr => {
        return usr.sellerMail === user?.email
    });
    console.log(userFilters);
    return (

        <>
            <thead className="table mx-auto lg:w-1/2 hover">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Advertise</th>
                    <th>Action</th>
                </tr>
            </thead>
            {
                userFilters.map(obj => <div className="mx-auto lg:w-1/2">
                    <div >
                        <table className="table w-full table-compact">
                            <tbody className=''>
                                <tr className='mx-auto'>
                                    <td>
                                        <div className="">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={obj.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                    <td >
                                        <div>
                                            <div className="font-bold text-start">{obj.name}</div>
                                        </div>
                                    </td>
                                    <td className=''>
                                        {obj.sellingPrice}

                                    </td>
                                    <td>
                                        <button className='btn btn-primary btn-xs '>Pay</button>
                                    </td>
                                    <th >
                                        <button onClick={() => handleAdvertice(obj)} className="btn btn-ghost btn-xs">Advertise </button>
                                    </th>
                                    <th >
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                        <Link to={`/update/${obj._id}`}> <button className="btn btn-ghost btn-xs">Update</button></Link>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>)
            }
        </>


    );
};

export default MyProducts;