import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const ProductDetails = () => {
    const productDetails = useLoaderData()
    // console.log(productDetails)

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={productDetails.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productDetails.name}</h2>
                    <p>{productDetails.price}</p>
                    <p>{productDetails.conditionType}</p>
                    <p>{productDetails.mobile}</p>
                    <p>{productDetails.location}</p>
                    <p>{productDetails.yearOfPurchase}</p>
                    <p>{productDetails.discription}</p>
                    <label htmlFor="my-modal-3" className="btn">open modal</label>
                </div>
                <BookingModal
                    productDetails={productDetails}
                ></BookingModal>
                
            </div>
           
        </div>
    );
};

export default ProductDetails;