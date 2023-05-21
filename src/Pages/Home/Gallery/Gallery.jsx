import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"



const images = [
    "https://cdn.pixabay.com/photo/2023/04/24/10/37/car-7947765_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/20/06/00/fiat-1754723_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/06/21/10/13/bobby-car-2426781_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/25/13/01/car-1768794_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/27/16/10/child-862770_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/04/24/12/54/model-car-5086785_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/02/12/16/19/autos-2060420_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/02/12/06/messerschmitt-kr200-433577_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/08/05/12/46/auto-2583297_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/11/23/12/11/toy-542701_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/06/01/16/35/vw-beetle-7236178_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/20/05/56/fiat-1754720_960_720.jpg"
]

const Gallery = () => {
    const [data, setData] = useState({ img: "", i: 0 });

    const viewImage = (img, i) => {
        setData({ img, i })
        console.log(data)
    }

    return (
        <>
            <div style={{ padding: "2rem", marginTop: "3rem" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="1rem">
                        {
                            images.map((image, i) =>
                            (
                                <img
                                    key={i}
                                    src={image}
                                    style={{ with: "100%", display: "block", cursor: "pointer" }}
                                    alt=""
                                    onClick={() => viewImage(image, i)}
                                />
                            )
                            )
                        }
                    </Masonry>
                </ResponsiveMasonry>

            </div>
        </>
    )



};

export default Gallery;