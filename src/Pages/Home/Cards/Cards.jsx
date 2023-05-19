import React from 'react';


const Cards = () => {
    return (
        <div>
            <div className="carousel w-full bg-red-400">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner01} className="w-full" />

                    <div className="absolute flex justify-between h-full py-0  md:py-10  lg:py-10 pl-0 md:pl-3 lg:pl-6  left-0 right-0  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">


                        <div className='text-white space-y-2 lg:space-y-9 ml-[4rem]'>
                            <h2 className=' text-md md:tex-xl font-normal md:font-bold lg:text-6xl lg:font-bold'>50% OFF ALL</h2>
                            <p className='text-sm md:text-xl lg:text-3xl'>Radio Controlled Cars</p>
                            <button className="btn text-white btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">SHOP NOW</button>



                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 '>
                        <a href="#slide4" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-circle  mr-2">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">❯</a>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner02} className="w-full " />

                    <div className="absolute flex justify-between h-full py-10 pl-6  left-0 right-0  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white space-y-9 ml-[4rem]'>
                            <h2 className='text-6xl font-bold'>50% OFF ALL</h2>
                            <p className='text-3xl'>Radio Controlled Cars</p>
                            <button className="btn text-white btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">SHOP NOW</button>



                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>

                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner03} className="w-full" />
                    <div className="absolute flex justify-between h-full py-10 pl-6  left-0 right-0  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-9 ml-[4rem]'>
                            <h2 className='text-6xl font-bold'>50% OFF ALL</h2>
                            <p className='text-3xl'>Radio Controlled Cars</p>
                            <button className="btn text-white btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">SHOP NOW</button>



                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner04} className="w-full" />
                    <div className="absolute flex justify-between h-full py-10 pl-6  left-0 right-0  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">

                         <div className='text-white space-y-9 ml-[4rem]'>
                            <h2 className='text-6xl font-bold'>50% OFF ALL</h2>
                            <p className='text-3xl'>Radio Controlled Cars</p>
                            <button className="btn text-white btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg">SHOP NOW</button>



                        </div>
                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                        <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;