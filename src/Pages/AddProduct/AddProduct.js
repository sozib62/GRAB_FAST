import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbKey = process.env.REACT_APP_imgbb_Key

    const navigate = useNavigate()

    const handleAddProduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        sellerName: data.sellerName,
                        email: data.email,
                        image: imgData.data.url,
                        productName: data.productName,
                        price: data.price,
                        condition: data.condition,
                        location: data.location,
                        year_of_purchase: data.year_of_purchase,
                        phone: data.phone,
                    }

                    fetch('https://assignment-12-server-site.vercel.app/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('product add successfully')
                            navigate('/dashboard/seeproduct')
                        })
                }
            })


    }

    return (
        <div className='w-96 p-7'>
            <h1 className='text-3xl'>Add a Product</h1>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("sellerName", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("productName", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">price</span></label>
                    <input type="text" {...register("price", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">condition </span></label>
                    <input type="text" {...register("condition ", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location </span></label>
                    <input type="text" {...register("location ", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of purchase</span></label>
                    <input type="text" {...register("year_of_purchase", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">phone</span></label>
                    <input type="text" {...register("phone", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;