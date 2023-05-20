import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';



const Login = () => {
    const [success, setSuccess] = useState("")
    const { login, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user) {
                    setSuccess("Login Successful")
                    navigate('/')
                }

            })
    }

    //sign in with google

    const handleGoogle = () => {
        googleSignIn()
        .then(result=>{
            const user = result.user;
            if (user) {
                setSuccess("Login Successful")
                navigate('/')
            }
        })
        .catch(error =>{
            console.log(error.message)
        })
        
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">

                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span>New User? <Link to="/signUp" className=" link link-hover">Sign Up</Link>
                                    </span>

                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                                <button onClick={handleGoogle} className='btn  mt-3'>Login with Google</button>
                                <p className='text-center text-success'>{success}</p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;