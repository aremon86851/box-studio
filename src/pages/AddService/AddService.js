import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useTitle } from '../../hooks/useTitle';

const AddService = () => {
    const { user } = useContext(ReactContext)
    useTitle('Add Service')
    const userEmail = user?.email
    const handleSarviceAdded = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const imageUrl = form.imgUrl.value;
        const email = form.email.value;
        const price = form.price.value;
        const description = form.description.value;
        const service = {
            title: name,
            img: imageUrl,
            price,
            description,
            email
        }
        // Service add via post fetch
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Service added successfully!', {
                        icon: '👏',
                    });
                }
                form.reset()
            })

    }
    return (
        <div className='my-7'>
            <form onSubmit={handleSarviceAdded}>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Service Image URL:</span>
                        </label>
                        <input type="url" placeholder="image url" name='imgUrl' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className=' grid grid-cols-2 gap-5'>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" defaultValue={userEmail} className="input input-bordered w-full italic" readOnly />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="name" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea w-full border-1 border-gray-300" name='description' placeholder="write your review" required></textarea>
                </div>
                <div className='mt-5'>
                    {
                        user?.uid ? <input className='btn' type="submit" value="Add Service" /> : <Link to="/login"><input className='btn' type="submit" value="Please Login First !!" /></Link>
                    }
                    <Toaster />
                </div>
            </form>
        </div>
    );
};

export default AddService;