import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'

const AddToy = () => {
    const {user} = useContext(AuthContext);



    const handleProduct =(event)=> {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = user?.displayName;
        const email = user?. email;
        const  subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.detailDescription.value;
        const picture = form.productImageUrl.value;
        const newProduct = {
            name,
            sellerName,
            email,
            subCategory,
            price,
            rating,
            availableQuantity,
            description,
            picture
        }
 console.log(newProduct)

 fetch('http://localhost:5000/toys', {
    method : 'POST',
    headers: {
        'content-type': "application/json"

    },
    body: JSON.stringify(newProduct)

 })
 .then(res=> res.json())
 .then(data=>{
    console.log(data)
    if(data.insertedId){
        Swal.fire({
            title: 'Added',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'continue'
          })
    }
 })

    }




    return (
        <form onSubmit={handleProduct}>
            <div >
                

                <div className="card-body grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name='subCategory' placeholder="Sub-category" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Product Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' placeholder="Available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name='detailDescription' placeholder="Detail description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input type="text" name='productImageUrl' placeholder="Product image url" className="input input-bordered" />
                    </div>



                </div>
                <div className="form-control mb-3">
                   <input className='btn btn-primary' type="submit" value="Add Product" />
                </div>

            </div>
        </form>
    );
};

export default AddToy;