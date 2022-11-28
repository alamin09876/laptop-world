import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin, notAdmin] = useAdmin(user?.email);
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            {
                                isAdmin === 'admin' ? <button><Link to='/allusers' className='mr-6'>All users</Link></button> : <></>

                            }
                            {
                                isAdmin === 'admin' ? <button><Link to='/sellers' className='mr-6'>All sellers</Link></button> : <></>
                            }
                            <button ><Link to="/myorders" className='mr-6'>My Orders</Link></button>

                            {
                                isAdmin === 'admin' || isAdmin === 'seller' ? <button ><Link to='/sellerdashboard' className='mr-6 ms-6'>Dashboard</Link></button> : <></>
                            }

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Laptop World</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user?.uid ?
                            <>
                                {
                                    isAdmin === 'admin' ? <button ><Link to='/allusers' className='lg:mr-2 hidden lg:flex'>All users</Link></button> : <></>
                                }
                                {
                                    isAdmin === 'admin' ? <button><Link to='/sellers' className='mr-2'>All sellers</Link></button> : <></>
                                }
                                <button ><Link to="/myorders" className='lg:mr-2 hidden lg:flex'>My Orders</Link></button>
                                <span className='mr-6'>{user?.displayName}</span>
                                {
                                    isAdmin === 'admin' || isAdmin === 'seller' ? <button ><Link to='/sellerdashboard' className='lg:mr-6 lg:ms-6 hidden lg:flex'>Dashboard</Link></button> : <></>
                                }
                                <button className='lg:mr-5 ' onClick={handleLogout}>Log Out</button>
                            </>
                            :
                            <>
                                <button className='mr-10'><Link to="/login">Login</Link></button>
                                <button className='mr-10'><Link to="/signup">Registration</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;