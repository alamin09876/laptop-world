import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Advertice from '../Advertice/Advertice';
import Carousle from '../Carousle/Carousle';

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
            <Carousle></Carousle>
            <h2 className='text-center text-6xl my-10'>Category Section</h2>
            <div className='grid lg:grid-cols-3 gap-4 lg:m-6'>
                {
                    category.map(cat => <Link className='card-body text-white text-center  bg-slate-600 ' to={`/categories/${cat._id}`} >{cat.category}</Link>)
                }
            </div>
            <h2 className='text-center text-6xl my-10'>Advertice Section</h2>
            <Advertice></Advertice>

        </div>
    );
};

export default Home;