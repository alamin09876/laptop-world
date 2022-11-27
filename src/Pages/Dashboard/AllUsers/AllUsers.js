import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users);
    return (
        <div>
           {
                users.map((usr,i) => <div key={usr._id} usr={usr}>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                           
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>User Type</th>
                                    <th>Make Admin</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{i+1}</th>
                                    <td>{usr.name}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.displayUser}</td>
                                    <td><button className='btn btn-xs bg-red-600'>Make Admin</button></td>
                                    <td><button className='btn btn-xs'>X</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllUsers;