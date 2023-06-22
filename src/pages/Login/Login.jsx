/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import loginImg from '../../assets/Login.gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');

    // private route setup
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();
        setError('');
        logIn(email, password)
            .then(result => {
                // const loggedInUser = result.user;
                // console.log(loggedInUser);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMassage = error.code;
                if (errorMassage) {
                    setError('Email address or password does not match');
                }
            })

    }
    const handleLoginWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                // const loggedUser = result.user;
                // console.log(loggedUser);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error);
            })
    }

    const handleLoginWithGithub = () => {
        logInWithGithub()
            .then(result => {
                // const loggedInUser = result.user;
                // console.log(loggedInUser);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col justify-center items-center lg:flex-row-reverse md:gap-20">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-cyan-900">Please Login</h1>
                        <img className='mt-7' src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 border-orange-300 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' name='submit' className="btn bg-orange-500 border-0 hover:bg-orange-600" value='Login' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-pink-700 font-semibold'>{error}</p>
                                <p><small>New to heroChef ?  Please <Link className='link font-bold text-orange-500 hover:text-orange-600' to={`/register`}>Register</Link> or Login with : </small></p>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <button onClick={handleLoginWithGoogle} className='btn btn-outline border-orange-500 text-orange-500 hover:border-orange-500 text-lg hover:bg-orange-500'><FaGoogle></FaGoogle></button>
                                    <button onClick={handleLoginWithGithub} className='btn btn-outline border-orange-500 text-orange-500 hover:border-orange-500 text-lg hover:bg-orange-500'><FaGithub></FaGithub></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;