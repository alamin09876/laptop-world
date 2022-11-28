import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const Advertice = () => {
    const [advertice, setAdvertice] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/advertice')
            .then(res => res.json())
            .then(data => {
                
                setAdvertice(data)})
    }, [])
    console.log(advertice);
    if(advertice.length <= 0 ){
        return <Spinner></Spinner>
    }
    return (
        <div className='grid lg:grid-cols-3'>
            {
                advertice.map(adv => <div
                key={adv._id} adv={adv}
                ><div className="card card-compact w-96 h-96 my-10 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={adv.picture} alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{adv.name}</h2>
                        <p>Price: ${adv.price}</p>
                        <p>Condition: {adv.conditionType}</p>
                        <p>Purchase Year: {adv.yearOfPurchase}</p>
                        <p>Product Description: {adv.discription}</p>
                        <div className="card-actions w-full mx-auto">
                        <Link to={`/product/${adv._id}`}><button className="btn btn-primary  ">Buy Now</button></Link>
                        </div>
                    </div>
                </div></div>)
            }

        </div>
    );
};

export default Advertice;