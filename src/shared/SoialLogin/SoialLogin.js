import React, { useContext } from 'react';
import { ReactContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const SoialLogin = () => {
    const { googleLogin } = useContext(ReactContext)
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                toast('User successfully logged in with google!', {
                    icon: '👏',
                });
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn bg-sky-600 text-white border-0 hover:bg-sky-800">Google</button>
            <Toaster />
        </div>
    );
};

export default SoialLogin;