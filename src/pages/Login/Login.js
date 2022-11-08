import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { login } = useContext(ReactContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user
                toast('User successfully logged in!', {
                    icon: '👏',
                });
                form.reset()
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                                <p className='text-left'><small> <Link to="/signup" className="label-text-alt link link-hover underline italic text-blue-500 font-semibold">Create an account ?</Link></small></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;