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
            <div className='grid lg:grid-cols-3 gap-4 lg:m-6'>
                {
                    category.map(cat => <Link className='card-body text-white text-center  bg-slate-600 ' to={`/categories/${cat._id}`} >{cat.category}</Link>)
                }
            </div>
            <Advertice></Advertice>

        </div>
    );
};

export default Home;