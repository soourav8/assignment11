import React, { useContext, useEffect, useState } from 'react';
import { } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/toys/${user.email}`

    // useEffect((url)=>{
    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data=> console.log(data))
    // },[])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMyToys(data)
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);


    const handleDelete = id =>{
        console.log(id)
        if(id){
            Swal.fire({
                title: 'Success',
                text: 'Delete Successful',
                icon: 'success',
                confirmButtonText: 'continue'
                
              })
            
            fetch(`http://localhost:5000/toys/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {console.log(data)
                if(data.deletedCount>0){
                    
                   
                    const remaining = myToys.filter(myToy=> myToy._id !== id);
                    setMyToys(remaining)
                    
    
                }
        })
            
            

        }

    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                   
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        
                        {
                            myToys.map(myToy=>  <tr key={myToy._id}>
                                <th>{myToy.name}</th>
                                <th>{myToy.price}</th>
                                <th>{myToy.availableQuantity}</th>
                                <th>{myToy.description}</th>
                                <th><button className='btn btn-primary'>Edit</button></th>
                                <th><button onClick={()=>handleDelete(myToy._id)} className='btn btn-error'>Delete</button></th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;