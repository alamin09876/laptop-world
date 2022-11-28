import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const myorders = useLoaderData()
    console.log(myorders)
    const { user } = useContext(AuthContext)
    const filtered = myorders.filter(obj => {
        return obj.email === user?.email;
    });

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                </table>
            </div>
            {
                user?.uid ?
                    <>
                        {
                            filtered.map((order, index) => <div
                                key={order._id}
                                order={order}
                            >
                                <div className="overflow-x-auto w-full">
                                    <table className="table w-1/2 mx-auto">
                                        <tbody>

                                            <tr>
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={order.picture} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div>
                                                        <div className="font-bold">{order.productName}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {order.price}
                                                </td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">pay</button>
                                                </th>
                                            </tr>

                                        </tbody>



                                    </table>
                                </div>


                            </div>)
                        }
                    </>
                    :
                    <>

                    </>
            }
        </div>
    );
};

export default MyOrders;