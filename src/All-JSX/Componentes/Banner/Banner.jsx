
import Lottie from 'lottie-react';
import 'swiper/css';
import "./Banner.css";
import animationData from "../../../../public/animation_lnezqfbz.json";
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

import blob from "../../../assets/rev-slider-04.png"

const Banner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="lg:h-[calc(100vh-92px)] h-auto grid grid-cols-1 md:grid-cols-2 items-center relative">

            <div className="px-5 lg:px-0">
                <ScrollAnimation>
                    <h1 className="lg:text-6xl md:text-4xl font-medium z-0 text-3xl text-white leading-relaxed">Crafting <span className='text-[#e84118]'>Memorable</span> Moments for Your <span className='text-[#e84118]'>Corporate</span> World</h1>
                </ScrollAnimation>

                <ScrollAnimation>
                    <p className=" mt-5 leading-loose md:text-base text-xs text-white">
                        Welcome to CorporateEventsHub.com, your premier source for crafting unforgettable corporate gatherings. At Corporate Events Hub, we specialize in bringing your corporate vision to life, one event at a time.
                    </p>
                </ScrollAnimation>
                
                <img className='absolute top-[10%] z-0 w-[30%]' src={blob} alt="" />

                <div className="mt-7">
                    <ScrollAnimation>
                        <button id="banner-button" className='shadow-lg'>Book Now</button>
                    </ScrollAnimation>
                </div>
            </div>

            <div>
                <ScrollAnimation>
                    <Lottie 
                        className="w-[100%]"
                        options={defaultOptions}
                        animationData={animationData}
                        height={200}
                        width={200}
                        ></Lottie>
                </ScrollAnimation>
            </div>

        </div>
    );
};

export default Banner;