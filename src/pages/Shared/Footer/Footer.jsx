/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-orange-50 rounded-t-lg pb-8'>
            <footer className="footer p-10  text-base-content border-b-2 border-orange-200">
                <div>
                    <span className="footer-title text-orange-600">Services</span>
                    <Link className="link link-hover hover:text-orange-700" to={`/login`}>Login</Link>
                    <Link className="link link-hover hover:text-orange-700" to={`/register`}>Register</Link>
                    <a className="link link-hover hover:text-orange-700">Branding</a>
                    <a className="link link-hover hover:text-orange-700">Design</a>
                    <a className="link link-hover hover:text-orange-700">Marketing</a>
                    <a className="link link-hover hover:text-orange-700">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-orange-600">Company</span>
                    <Link className="link link-hover hover:text-orange-700" to={`/`}>Home</Link>
                    <Link className="link link-hover hover:text-orange-700" to={`/blog`}>Blog</Link>
                    <a className="link link-hover hover:text-orange-700">Jobs</a>
                    <a className="link link-hover hover:text-orange-700">About us</a>
                    <a className="link link-hover hover:text-orange-700">contact</a>
                    <a className="link link-hover hover:text-orange-700">Press Kit</a>
                </div>
                <div>
                    <span className="footer-title text-orange-600">Legal</span>
                    <a className="link link-hover hover:text-orange-700">Terms of use</a>
                    <a className="link link-hover hover:text-orange-700">Privacy policy</a>
                    <a className="link link-hover hover:text-orange-700">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-orange-600">Newsletter</span>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative ">
                            <input type="text" placeholder="username@mail.com" className="input input-bordered w-full pr-16" />
                            <button className=" btn border-0 bg-orange-600 text-white hover:bg-orange-500 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <p className='text-center mt-4'><small>Copyright © 2023 - All right reserved by MD Abir Alahe</small></p>
        </div>
    );
};

export default Footer;