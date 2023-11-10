
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./bgslider.css";

const BgSlider = () => {

    return (
        <div>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

                className="mySwiper">
                <SwiperSlide>
                    <span className="overlay"></span>
                    <img className="absolute z-[0] h-screen w-full" src="https://i.ibb.co/SyWRdVY/wan-san-yip-ID1y-Wa1-Wpx0-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <span className="overlay"></span>
                    <img className="absolute z-[0] h-screen w-full" src="https://i.ibb.co/Cnx9hZb/group-diverse-people-having-business-meeting.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <span className="overlay"></span>
                    <img className="absolute z-[0] h-screen w-full" src="https://i.ibb.co/7p8rdt1/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg" alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default BgSlider;