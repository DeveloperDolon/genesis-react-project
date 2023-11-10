
import { useLoaderData } from "react-router-dom";
import Lottie from 'lottie-react';

import animationData from "../../../public/animation_lng40xes.json"
import "swiper/css";

import { useEffect, useState } from "react";
import ScrollAnimation from "../Componentes/ScrollAnimation/ScrollAnimation";
import ServiceCard from "../Componentes/ServiceCard/ServiceCard";
import EventItem from "../Componentes/EventItems/EventItem";
import Banner from "../Componentes/Banner/Banner";
import NavBar from "../Componentes/NavBar/NavBar";
import BgSlider from "../Componentes/BgSlider/BgSlider";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const services = useLoaderData();
    const [eventItems, setEventItems] = useState([]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    });

    useEffect(() => {
        fetch("/eventItems.json")
            .then((res) => res.json())
            .then(data => setEventItems(data))
    }, []);


    return (
        <div>
            <div>
                <BgSlider></BgSlider>
                <div className="max-w-7xl mx-auto">
                    <NavBar></NavBar>
                    <Banner></Banner>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">Our Service</h1>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <p className="text-center lg:px-32 mt-5">
                            At Genius Expo, we are more than event planners; we are architects of unforgettable experiences. With a passion for creativity and a dedication to excellence, we have earned our reputation as a leader in the world of corporate event
                            management.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
                    {services.map((item, idx) => <ServiceCard key={idx} data={item}></ServiceCard>)}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">Our Popular Event Items</h1>
                    </ScrollAnimation>
                </div>

                <div className="grid grid-cols-1 mt-14">
                    {
                        eventItems.map((item, idx) => <EventItem key={idx} data={item}></EventItem>)
                    }
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">WHY CHOOSE US FOR YOUR EVENT?</h1>
                    </ScrollAnimation>
                </div>



                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-10">
                    <div className="">
                        <div data-aos="fade-down" className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div  className="collapse-title text-xl font-medium">
                                ALL KIND OF LOGISTICS AND RESOURCES SUPPORT
                            </div>
                            <div className="collapse-content">
                                <p>As an experienced Event Management company, we have all kind of Event equipment, logistics and resources available</p>
                            </div>
                        </div>

                        <div data-aos="fade-top" className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                EXPERIENCED EVENT PLANNER AND MANAGER
                            </div>
                            <div className="collapse-content">
                                <p>When it&apos;s about making your Event successful, it&apos;s all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                            </div>
                        </div>
                        <div data-aos="fade-right" className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Company Values and Mission Statement.
                            </div>
                            <div className="collapse-content">
                                <p>Our company is driven by a commitment to excellence in event management. Our mission is to transform your vision into extraordinary and memorable events, tailored to your specific needs and preferences.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Portfolio
                            </div>
                            <div className="collapse-content">
                                <p>Explore our portfolio to see some of our most successful events. From intimate gatherings to large-scale conventions, our portfolio showcases our diverse capabilities and creative solutions.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ScrollAnimation>
                            <Lottie
                                className="w-[80%] mx-auto"
                                options={defaultOptions}
                                animationData={animationData}
                                height={200}
                                width={200}
                            ></Lottie>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>

            {/* <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">Our Recent Events</h1>
                    </ScrollAnimation>
                </div>

                <div className="overflow-hidden">
                    <Slider></Slider>
                </div>
            </div> */}

            <dir className="max-w-7xl mx-auto mt-32">

                <div className="dark:bg-gray-900">
                    <div className="pb-20">
                        <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96">
                            <div className="mx-auto container w-full flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center flex-col">
                                    <div className="mt-20">
                                        <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">By the numbers</h2>
                                    </div>
                                    <div className="mt-6 mx-2 md:mx-0 text-center">
                                        <p className="lg:text-lg md:text-base leading-6 text-sm text-white">5 years, consistent quality and you get results. No matter what</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
                                <div 
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                 className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">40+</h2>
                                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Happy Clients</p>
                                </div>
                                <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">540+</h2>
                                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Events Completed</p>
                                </div>
                                <div 
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">300</h2>
                                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Dedicated Members</p>
                                </div>
                                <div 
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">25+</h2>
                                    <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Awards Won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </dir>
        </div>
    );
};

export default Home;