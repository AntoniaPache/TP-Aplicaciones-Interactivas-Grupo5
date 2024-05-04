import React from "react";

export default function InfiniteCardSlider( {images} ) {
    return (
        <div>
            {images.map((image, index) => {
                return (
                    <div key={index} className="p-1">
                        <img src={image} alt="Image" className="h-24"/>
                    </div>
                )
            })}
        </div>
    )
}