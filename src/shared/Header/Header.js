import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(ReactContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className="navbar bg-base-100 border-b-4 border-indigo-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='hover:text-blue-500' to="/">Home</Link></li>
                        <li><Link className='hover:text-blue-500' to="/blog">Blog</Link></li>
                        <li><Link className='hover:text-blue-500' to="/services">Services</Link></li>
                        <li>
                            {
                                user?.uid ? <>
                                    <li><Link className='hover:text-blue-500' to="/myReview">My Review</Link></li>
                                    <li><Link className='hover:text-blue-500' to="/addService">Add service</Link></li>
                                    <li><Link className='hover:text-blue-500' to="/login">Logout</Link></li>
                                </> : <>
                                    <li><Link className='hover:text-blue-500' to="/login">Login</Link></li>
                                </>
                            }
                        </li>
                    </ul>
                </div>
                <Link to="/" className="pl-0 btn btn-ghost normal-case italic text-black text-3xl font-bold">Box<span className='underline ml-2'>Studio</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold underline ">
                    <li><Link className='hover:text-blue-500' to="/">Home</Link></li>
                    <li><Link className='hover:text-blue-500' to="/blog">Blog</Link></li>
                    <li><Link className='hover:text-blue-500' to="/services">Services</Link></li>
                    {
                        user?.uid ? <>
                            <li><Link className='hover:text-blue-500' to="/myReview">My Review</Link></li>
                            <li><Link className='hover:text-blue-500' to="/addService">Add service</Link></li>
                            <li><Link className='hover:text-blue-500' to="/login" onClick={handleLogOut}>Logout</Link></li>
                        </> : <>
                            <li><Link className='hover:text-blue-500' to="/login">Login</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;