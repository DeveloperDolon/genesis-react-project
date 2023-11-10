import { Link } from "react-router-dom";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import PropTypes from "prop-types";

const ServiceCard = ({ data }) => {

    const { id, category_name, category_price, category_description, category_image } = data;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="rounded-t-2xl overflow-hidden">
                <ScrollAnimation>
                    <img src={category_image} className="h-[250px] w-[100%] duration-500 hover:scale-110 hover:rotate-1 rounded-t-lg" alt="Shoes" />
                </ScrollAnimation>
            </div>
            <div className="card-body">
                <ScrollAnimation>
                    <h2 className="card-title">
                        {category_name}
                    </h2>
                </ScrollAnimation>

                <ScrollAnimation>
                    <p>{category_description.length > 50 ? category_description.slice(0, 50) : category_description}</p>
                </ScrollAnimation>
                
                <ScrollAnimation>
                    <h1 className="text-lg">Price : <span className="font-bold">{category_price}$</span></h1>
                </ScrollAnimation>

                <div className="card-actions justify-center mt-6">
                    <ScrollAnimation>
                        <button id="card-btn" className="btn text-white">
                            <Link to={`/service/${id}`}>
                                View Details
                            </Link>
                        </button>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    data: PropTypes.object
}