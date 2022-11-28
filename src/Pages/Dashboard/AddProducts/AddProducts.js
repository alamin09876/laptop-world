import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://laptop-world-server-five.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const productName = form.productName.value;
        const sellingPrice = form.sellingPrice.value;
        const buyingPrice = form.buyingPrice.value;
        const description = form.description.value;
        const conditionType = form.conditiontype.value
        const mobile = form.mobile.value
        const location = form.location.value
        const yearOfPurchase = form.yearOfPurchase.value
        const categoryId = form.categoryId.value
        const sellerMail = user?.email;
        const postDate = new Date().getTime();
        const isAdvertice = false;
        const isAvailable = true;
        const sellerName = user?.displayName
        // console.log(photoURL, productName, buyingPrice, description)
        const services = {
            picture: photoURL,
            name: productName,
            buyingPrice,
            discription: description,
            conditionType,
            mobile,
            location,
            yearOfPurchase,
            sellingPrice,
            isAdvertice,
            isAvailable,
            postDate, categoryId, sellerMail, sellerName
        }
        // console.log(services)
        fetch('https://laptop-world-server-five.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Product Added Successfully')


            })
            .catch(err => console.log(err))

    }
    return (
        <div className='flex justify-center my-6' >

            <form onSubmit={handleReview} className='my-6'>
                <h1 className='text-5xl font-semibold mb-6 text-center text-black'>Add a New Product</h1>
                <input name="productName" type="text" placeholder="Product Name" className="input input-ghost  input-bordered mb-6 w-96" /><br></br>
                <input name="buyingPrice" type="text" placeholder="Buying Price" className="input input-ghost  input-bordered mb-6 w-96" /><br></br>
                <input name="sellingPrice" type="text" placeholder="Selling Price" className="input input-ghost input-bordered mb-6 w-96" /><br></br>
                
                <select name='conditiontype' className="select select-bordered my-6 w-96">
                    <option disabled selected>Select Product Condition</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                <br></br>
                <input name="mobile" type="text" placeholder="Mobile Number" className="input input-ghost input-bordered mb-6 w-96" /><br></br>
                <input name="location" type="text" placeholder="location " className="input input-ghost input-bordered mb-6 w-96" /><br></br>
                <input name="yearOfPurchase" type="text" placeholder="Year of purchase" className="input input-ghost input-bordered mb-6 w-96" /><br></br>
                <input name="photoURL" type="text" placeholder="Photo URL" className="input input-ghost mb-6 input-bordered w-96" /><br></br>
                <select name='categoryId' className="select my-6 w-96 ">
                    <option disabled selected>Select Category</option>
                    {
                        category.map(cat => <option key={cat._id} value={cat._id}>{cat.category}</option>)
                    }
                </select>
                <br></br>

                <textarea name="description" className="textarea mb-6 textarea-bordered h-24 w-96" placeholder="Description" required></textarea><br></br>


                <div className='flex justify-center'>
                    <input className='btn ' type="submit" value="Add Product" />
                    
                </div>
            </form>
        </div>
    );
};

export default AddProducts;