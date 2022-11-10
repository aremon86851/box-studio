import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useTitle } from '../../hooks/useTitle';

const Update = () => {
    const infos = useLoaderData()
    useTitle('Updated page')
    // update handler
    const handleUpdate = event => {
        event.preventDefault();
        const reviews = event.target.description.value;
        fetch(`https://assignment-11-server-teal-eight.vercel.app/update/${infos._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviews })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Review successfully updated!', {
                        icon: '👏',
                    });
                }
            })
    }
    return (
        <div className='my-10 mx-20'>
            <form onSubmit={handleUpdate}>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold italic">Your review :</span>
                    </label>
                    <textarea defaultValue={infos?.yourReview} className="textarea w-full border-1 border-gray-300" name='description' placeholder="write your review" required></textarea>
                </div>
                <div className='mt-5 text-left'>
                    <input className='btn' type="submit" value="Update Review" />
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default Update;