import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
           details card {data.name}
        </div>
    );
};

export default ViewDetails;