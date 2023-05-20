import React, { useContext } from 'react';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';




const Navbar = () => {
const {user, logOut} = useContext(AuthContext);

const handleLogout = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
}

    return (
        <div >
            <div className="navbar bg-[#B8E7E1]">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            
                           {
                            user?.email ? <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>
                             <li><Link to="/myToys">My Toys</Link></li>
                            <li><Link to="/addToy">Add A Toy</Link></li>
                             <li><Link to="/blogs">Blogs</Link></li>
                             
                            </> : <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            </>
                           }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl  font-bold lg:text-3xl lg:font-extrabold">
                        <img className='w-[3rem] h-[2rem] ' src={logo} alt="" /> Toy Shop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                          user?.email ? <>
                          <li><Link className='font-bold' to='/'>Home</Link></li>
                        <li><Link className='font-bold' to='/allToys'>All Toys</Link></li>
                        
                        <li><Link className='font-bold' to='/myToys'>My Toys</Link></li>
                        <li><Link className='font-bold' to='/addToy'>Add A Toy</Link></li>
                        <li><Link className='font-bold' to='/blogs'>Blogs</Link></li>
                       
                          </>:<>
                          <li><Link className='font-bold' to='/'>Home</Link></li>
                        <li><Link className='font-bold' to='/allToys'>All Toys</Link></li>
                        <li><Link className='font-bold' to='/blogs'>Blogs</Link></li>
                          </>
                        }
                        



                    </ul>
                </div>
                
                <div className="navbar-end flex-col-reverse items-end  md:flex-row md:gap-9 md:items-center">
                    {/* navbar logout button  */}
                    {
                        user?.email && <li style={{listStyle: "none"}}><button className='btn btn-outline border-black text-white bg-[#32edcb] btn-xs sm:btn-sm md:btn-md lg:btn-lg' onClick={handleLogout}>Log Out</button></li>
                    }
                

                   
                    <div className="">
                        <label  className="btn btn-ghost btn-circle avatar">
                            {/* navbar user profile image  */}
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ? <><img src={user.photoURL} alt="" /></> : <></>
                                }
                            </div>
                        </label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;