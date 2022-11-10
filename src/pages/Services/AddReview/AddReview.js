import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactContext } from '../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const AddReview = ({ id, revInfo, setRevInfo }) => {
    const { user } = useContext(ReactContext)
    const userEmail = user?.email
    console.log(revInfo)

    const handleReviewSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const email = user?.email || "Please login first";
        const review = form.review.value;
        // Service object
        const reviews = {
            serviceId: id,
            name: name,
            img: imgUrl,
            email,
            yourReview: review
        }
        // Add review via post fetch
        fetch('https://assignment-11-server-teal-eight.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => {
                toast('Thanks for your review, please reload the page for show review!', {
                    icon: '👏',
                });
                return res.json()
            })
            .then(data => {
                console.log(data)
                const addNewRev = [reviews, ...revInfo]
                setRevInfo(addNewRev)
                form.reset()
            })

    }
    return (
        <div className="">
            <form onSubmit={handleReviewSubmit}>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Profile URL:</span>
                        </label>
                        <input type="url" placeholder="image url" name='imgUrl' className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" defaultValue={userEmail} className="input input-bordered w-full italic" readOnly />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Your review</span>
                    </label>
                    <textarea className="textarea w-full border-1 border-gray-300" name='review' placeholder="write your review" required></textarea>
                </div>
                <div className='mt-5'>
                    {
                        user?.uid ? <input className='btn' type="submit" value="Add Review" /> : <Link to="/login"><input className='btn' type="submit" value="Please Login First !!" /></Link>
                    }
                    <Toaster />
                </div>
            </form>
        </div>
    );
};

export default AddReview;