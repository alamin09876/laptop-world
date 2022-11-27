import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Advertice from '../Advertice/Advertice';

const Home = () => {
    const [category, setCategory] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h2>Home</h2>
            <div>
                {
                    category.map(cat =><Link to={`/categories/${cat._id}`} className='btn btn-primary m-6'>{cat.category}</Link>)
                }


                {/* <MyProductId>fguiui</MyProductId> */}
            </div>
            <Advertice></Advertice>

        </div>
    );
};

export default Home;