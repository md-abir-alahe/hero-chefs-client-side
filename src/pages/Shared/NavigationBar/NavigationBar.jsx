/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import userLogo from '../../../assets/profile.png'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const NavigationBar = () => {
  const { user, logOut, loader } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }
  return (
    <div className="navbar bg-orange-50 px-3 rounded-full mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/blog`}>Blog</Link></li>
          </ul>
        </div>

        <Link className="normal-case text-2xl font-extrabold">hero<span className='text-orange-600'>Chef</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='font-semibold hover:text-orange-600'>
            <NavLink to={`/`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-orange-600"
                  : isPending
                    ? "pending"
                    : ""
              }
            >Home</NavLink>
          </li>
          <li className='font-semibold hover:text-orange-600'>
            <NavLink to={`/blog`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-orange-600"
                  : isPending
                    ? "pending"
                    : ""
              }
            >Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user &&
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                {
                  !loader && <>
                    <img className={user.displayName ? 'user-img-tooltip' : ''} src={user.photoURL ? user?.photoURL : userLogo} />
                    <Tooltip
                      anchorSelect='.user-img-tooltip'
                      content={user?.displayName}
                      place='left'
                    ></Tooltip>
                  </>
                }
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><Link onClick={handleLogOut} to={'/login'}>Logout</Link></li>
            </ul>
          </div>
        }
        {
          user ? <></> :
            <Link className='btn border-0 rounded-full bg-orange-600 text-white hover:bg-orange-500' to={`/login`}>Login</Link>
        }
      </div>
    </div>
  );
};

export default NavigationBar;