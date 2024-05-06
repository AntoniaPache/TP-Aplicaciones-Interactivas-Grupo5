
import PropTypes from "prop-types";

export default function InfiniteCardSlider({ images }) {
    return (
        <div className="flex overflow-hidden space-x-2">
            <div className="flex space-x-2 p-0 shadow-xl bg-transparent animate-loop-scroll">
                {images.map((image, index) => {
                    return (
                        <img key={index} src={image} alt="product" className="max-w-none w-[200px] rounded-sm"/>
                    )
                })}
            </div>
            <div className="flex space-x-2 p-0 shadow-xl bg-transparent animate-loop-scroll aria-hidden=true">
                {images.map((image, index) => {
                    return (
                        <img key={index} src={image} alt="Image" className="max-w-none w-[200px] rounded-sm"/>
                    )
                })}
            </div>
        </div>
    );
}

InfiniteCardSlider.propTypes = {
    images: PropTypes.array.isRequired,
};
