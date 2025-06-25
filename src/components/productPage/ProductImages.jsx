import React, { useState } from 'react';

function ProductImages({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);
    const [hoveredImage, setHoveredImage] = useState(null);

    const displayImage = hoveredImage || mainImage;

    return (
        <div className="flex sm:flex-row flex-col items-start justify-center gap-5">
            <div className="flex sm:flex-col flex-row sm:justify-center justify-between sm:w-auto w-full max-w-[100%] overflow-x-auto sm:overflow-x-hidden gap-1 mb-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        className="w-[8rem] h-auto object-cover mb-4 bg-[#F9F1E7] rounded-lg cursor-pointer"
                        onMouseOver={() => setHoveredImage(image)}
                        onMouseOut={() => setHoveredImage(null)}
                        onClick={() => setMainImage(image)}
                    />
                ))}
            </div>
            <div className="sm:w-[35rem] sm:h-[35rem] w-full h-auto bg-[#F9F1E7] rounded-xl">
                <img src={displayImage} alt="" className="w-full object-cover" />
            </div>
        </div>
    );
}

export default ProductImages;
