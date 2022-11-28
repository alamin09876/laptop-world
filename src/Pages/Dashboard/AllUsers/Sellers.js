import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Sellers = () => {
    const [users, setUsers] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch('https://laptop-world-server-five.vercel.app/sellers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const handleDelete = userDelete => {
        const agree = window.confirm(`Are you sure you want to delete :`)
        if (agree) {
            console.log("Deleting user with id:", userDelete._id)
            fetch(`https://laptop-world-server-five.vercel.app/userDelete/${userDelete._id}`, {
                method: 'DELETE',
                headers : {
                    'content-type' : 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = userDelete.filter(dlt => dlt._id !== userDelete._id)
                        setUsers(remaining)
                    }
                    
                })
        }
    }
    console.log(users);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra lg:w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th className='mr-6 text-center'>No</th>
                            <th className='mr-6 text-center'>Name</th>
                            <th className='mr-8 text-center'>Email</th>
                            <th className='mr-8 text-center'>User Type</th>
                            <th className='mr-6 text-center'>Make Admin</th>
                            <th className='mr-6 text-center'>Delete</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                users.map((usr, i) => <div key={usr._id} usr={usr}>
                    <div className="overflow-x-auto">
                        <table className="table lg:w-1/2 mx-auto">
                            <tbody className=''>
                                <tr className='lg:mr-6 text-center'>
                                    <th >{i + 1}</th>
                                    <td >{usr.name}</td>
                                    <td>{usr.email}</td>
                                    <td >{usr.displayUser}</td>
                                    <td ><button className='btn btn-xs bg-red-600'>Make Admin</button></td>
                                    <td ><button onClick={() =>handleDelete(usr)} className='btn btn-xs'>X</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Sellers;