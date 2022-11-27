import React from 'react';
import toast from 'react-hot-toast';

const Category = () => {
    const handleCategory = (event) =>{
        event.preventDefault()
        const category = event.target.category.value.trim();
        fetch('http://localhost:5000/categories',{
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({category})
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Category Added Successfully')
            console.log(data)})
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleCategory}>
                    <input name="category" type="category" placeholder="Type here" className="input w-full max-w-xs" />
                    <div className="modal-action">
                        <button className='btn'>Add Category</button>
                        <label htmlFor="my-modal-6" className="btn">X</label>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Category;