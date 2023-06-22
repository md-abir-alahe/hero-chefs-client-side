/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import registrationImg from '../../assets/registration.gif'
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser, logInWithGoogle, logInWithGithub, updateUserData } = useContext(AuthContext);
    const [error, setError] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        form.reset();
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long.');
        }

        createUser(email, password)
            .then(result => {
                updateUserData(name, photo);
                setError('');
                // const createdUser = result.user;
                // console.log(createdUser);
                // setError('');

            })
            .catch(error => {
                if (error.code == 'auth/email-already-in-use') {
                    setError('Email already exist.');
                }

            })
    }

    const handleLoginWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                setError('');
                // const loggedUser = result.user;
                // console.log(loggedUser);
            })
            .catch(error => {
                // console.log(error);
            })
    }

    const handleLoginWithGithub = () => {
        logInWithGithub()
            .then(result => {
                setError('');
                // const loggedUser = result.user;
                // console.log(loggedUser);
            })
            .catch(error => {
                // console.log(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col-reverse justify-center items-center md:flex-row-reverse md:gap-20">
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 border-orange-300 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' name='submit' className="btn bg-orange-500 border-0 hover:bg-orange-600" value='Register' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-pink-600 font-semibold'>{error}</p>
                                <p><small>Already have an account ?  Please <Link className='link font-bold text-orange-500 hover:text-orange-600' to={`/login`}>Login</Link> or Login with : </small></p>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <button onClick={handleLoginWithGoogle} className='btn btn-outline border-orange-500 text-orange-500 hover:border-orange-500 text-lg hover:bg-orange-500'><FaGoogle></FaGoogle></button>
                                    <button onClick={handleLoginWithGithub} className='btn btn-outline border-orange-500 text-orange-500 hover:border-orange-500 text-lg hover:bg-orange-500'><FaGithub></FaGithub></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-cyan-900">Register Now!</h1>
                        <img className='mt-7' src={registrationImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;