import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const [success, setSuccess] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState("")
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()





    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;



        // console.log(name, email, password, photoUrl);

        //create user 
        createUser(email, password)
            .then(result => {
                const user = result.user;
                

                //update user name and photo Url
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    // Profile updated!
                    // ...
                    console.log("user updated")
                }).catch((error) => {
                    // An error occurred
                    // ...
                });



                if (user) {
                    setError(user)
                    setSuccess("Sign Up Successful")
                    navigate('/')

                }
            })
            .catch(error => {
                setError(error.message)
            })



        


    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">

                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" required />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <span>Already Registered? <Link to='/login' className=" link link-hover">Login</Link></span>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                                {
                                    user ? <p className='text-center text-success'>{success}</p> :  <p className='text-center text-error'>{error}</p>
                                }
                                
                               

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;