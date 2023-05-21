import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <>
            <h2 className='text-success font-bold text-center mb-20'>ALl Toys</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    toys.map(toy => <Card key={toy._id} toy={toy}></Card>)
                }

            </div>
        </>
    );
};

export default AllToys;