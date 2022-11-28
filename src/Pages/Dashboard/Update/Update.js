import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateProduct = useLoaderData()
    const [user, setUser] = useState(updateProduct);

    useEffect(() => {
        fetch('https://laptop-world-server-five.vercel.app/products')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleUpdateUser = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const location = form.location.value;
        const updatedProduct = { price, location }
        // console.log(reviewData:updatedReview);
        fetch(`https://laptop-world-server-five.vercel.app/products/${updateProduct._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                // if(data.matchedCount > 0){


                // }
                console.log(data)
            })

    }



    return (
        <div className='mx-auto justify-center text-center'>
            <h2 className='text-2xl mx-auto lg:w-[800px] font-semibold my-6 p-6 rounded-lg'></h2>

            <h2 className='text-2xl mx-auto lg:w-[800px] font-semibold my-6 p-6 rounded-lg'>Please Update: {updateProduct.location}</h2>
            <form onSubmit={handleUpdateUser}>
                <input name="location" className="h-24 w-full lg:w-[800px]" placeholder="Your Message" defaultValue={updateProduct.location} required></input>
                <input name="price" className="h-24 w-full lg:w-[800px]" placeholder="Your Message" defaultValue={updateProduct.price} required></input>
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Update;