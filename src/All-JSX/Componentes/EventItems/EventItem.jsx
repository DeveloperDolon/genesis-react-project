import PropTypes from "prop-types";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import "./event.css"

const EventItem = ({ data }) => {

    const {id, item_name, item_description, item_image } = data;

    return (
        <div data-aos={`fade-${id % 2 === 0 ? "left" : "right"}`} id="event-item" className="grid md:grid-cols-5 items-center md:gap-10 gap-5 px-16 py-10 rounded-2xl">
            <div className=" p-4 rounded-lg overflow-hidden">
                <ScrollAnimation>
                    <img src={item_image} className="md:w-full h-28 object-cover rounded-lg" alt="" />
                </ScrollAnimation>
            </div>

            <div className="md:col-span-4">
                <ScrollAnimation>
                    <h1 className="text-3xl font-semibold">{item_name}</h1>
                </ScrollAnimation>

                <ScrollAnimation>
                    <p className="mt-3">{item_description}</p>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default EventItem;

EventItem.propTypes = {
    data: PropTypes.object
}