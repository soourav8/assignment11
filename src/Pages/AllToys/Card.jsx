import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({toy}) => {

    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[25rem] h-[20rem]' src={toy.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: {toy.price}</p>
                    <p>Sub Category {toy.subCategory}</p>
                    <p>Available {toy.availableQuantity}</p>
                    <div className="card-actions justify-end">
                        
                        {<Link to = {`/toy/${toy._id}`}>
                        <button className='btn btn-primary'>View Details</button>

                        </Link>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;