import PropTypes from "prop-types";
import ScrollAnimation from "../../Componentes/ScrollAnimation/ScrollAnimation";
import { Link } from "react-router-dom";

const CartItem = ({data}) => {
    return (
        <ScrollAnimation className="rounded-xl shadow-lg">
            <div className="grid grid-cols-4">
                <div>
                    <img className="object-cover md:h-[25vh] h-[20vh] w-full" src={data.category_image} alt="" />
                </div>
                <div className="col-span-3 bg-[#f5f6fa] py-3 px-7 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">{data.category_name}</h1>
                    <Link to={`/service/${data.id}`} className="btn-sm bg-[#00a8ff] mt-3 w-fit flex justify-center items-center rounded-lg text-white duration-500 hover:bg-[#dcdde1] font-medium hover:text-[black]">View Details</Link>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default CartItem;

CartItem.propTypes = {
    data : PropTypes.object
}