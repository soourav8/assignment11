import React from 'react';
import logo from '../../../images/logo.png'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer md:p-10 lg:p-10 bg-[#B8E7E1]  flex   flex-col items-center md:flex-row lg:flex-row   lg:justify-between md:justify-between">
                <div >
                    <img className='h-[5rem]' src={logo} alt="logo" />
                    <p className='font-extrabold text-3xl '>Toy Cars</p>
                    <p className='font-bold text-neutral-600'>The Toy Store</p>
                </div>

                <div >
                    <span className="footer-title">Important Links</span>
                    
                    <Link to='' className="link link-hover">Branding</Link>
                    
                    <Link to='' className="link link-hover">Design</Link>
                    
                    <Link to='' className="link link-hover">Marketing</Link>
                    
                    <Link to='' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Menu</span>
                    
                    <Link to='/' className="link link-hover">Home</Link>
                    
                    <Link to='/allToys' className="link link-hover">All Toys</Link>
                    
                    <Link to='/myToys' className="link link-hover">My Toys</Link>
                    
                    <Link to='/addToy' className="link link-hover">Add A Toy</Link>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    
                    <Link to='' className="link link-hover">Terms of use</Link>
                    
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;