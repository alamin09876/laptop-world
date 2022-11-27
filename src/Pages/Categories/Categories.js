import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Categories = ({cat}) => {
    

    const {id} = useParams()
    console.log(id);

    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/categoryProduct/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id])

    console.log(product);
    return (
        <div>
            {
                product.map(filter => <div key={filter._id} filter={filter}>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={filter.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{filter.name}</h2>
                            <p>{filter.price}</p>
                            <p>{filter.conditionType}</p>
                            <p>{filter.mobile}</p>
                            <p>{filter.location}</p>
                            <p>{filter.yearOfPurchase}</p>
                            <p>{filter.discription}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/product/${filter._id}`}><button className="btn btn-primary">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default Categories;