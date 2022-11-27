import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Advertice = () => {
    const [advertice, setAdvertice] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/advertice')
            .then(res => res.json())
            .then(data => {
                
                setAdvertice(data)})
    }, [])
    console.log(advertice);
    return (
        <div>
            {
                advertice.map(adv => <div
                key={adv._id} adv={adv}
                ><div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={adv.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{adv.name}</h2>
                        <p>Price: ${adv.price}</p>
                        <p>Condition: {adv.conditionType}</p>
                        <p>Purchase Year: {adv.yearOfPurchase}</p>
                        <p>Product Description: {adv.discription}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/product/${adv._id}`}><button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>
                </div></div>)
            }

        </div>
    );
};

export default Advertice;