import React from 'react';

const Card = ({toy}) => {

    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[25rem] h-[20rem]' src={toy.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;