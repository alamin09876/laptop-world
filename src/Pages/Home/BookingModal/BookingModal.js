import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ productDetails }) => {
    const { user } = useContext(AuthContext)
     console.log(productDetails)
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const picture = productDetails.picture;
        const mobile = form.mobile.value
        const location = form.location.value

        console.log(picture)
        const bookings = {

            productName: productName,
            price,
            picture,
            email,
            mobile,
            location,

            userName
        }
        console.log(bookings)
        fetch('https://laptop-world-server-five.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Booking Confirm')
                }
                else{
                    toast.error(data.message)
                }
                console.log(data)


            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input name='productName' type="text" defaultValue={productDetails.name} disabled placeholder="product name" className="input input-bordered w-full mb-6" />
                        <input name='userName' type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input input-bordered w-full mb-6" />
                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full mb-6" />
                        <input name='price' type="text" defaultValue={productDetails.sellingPrice} disabled placeholder="Price" className="input input-bordered w-full mb-6" />
                        <input name="location" placeholder="Meeting Location" className="input input-bordered w-full mb-4" />
                        <input name="mobile" placeholder="Phone Number" className="input input-bordered w-full mb-4 " /><br></br>
                        <button className="btn btn-active btn-ghost w-full">Button</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;