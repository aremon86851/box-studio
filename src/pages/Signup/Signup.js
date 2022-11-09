import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../shared/SoialLogin/SoialLogin'

const Signup = () => {
    const { createUser } = useContext(ReactContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast('User successfully created !', {
                    icon: '👏',
                });
                form.reset()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p><small>Already have an account ?<Link to="/login" className="label-text-alt link link-hover italic underline text-blue-500 ml-1 font-semibold">Login</Link></small></p>

                            </label>
                        </div>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;