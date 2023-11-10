import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Componentes/NavBar/NavBar";
import { useEffect, useState } from "react";
import ScrollAnimation from "../../Componentes/ScrollAnimation/ScrollAnimation";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { setLocalStorageData } from "../../utilitis/localStorage/localStorage";

const ServiceDetails = () => {
    const {id} =  useParams();
    const data = useLoaderData();
    const [mainData, setMainData] = useState({});

    useEffect(() => {
        const finding = data.find(item => (item.id + "") === id);
        setMainData(finding);
    }, [id]);

    const handleAddToCart = (id) => {
        setLocalStorageData(id);
    }

    return (
        <div>
            <div className="bg-[#353b48]">
                <div className="max-w-7xl mx-auto">
                    <NavBar></NavBar>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-28 grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                <div className="">
                    <ScrollAnimation>
                        <img className="rounded-2xl" src={mainData.category_image} alt="" />
                    </ScrollAnimation>
                </div>

                <div className="">
                    <ScrollAnimation>
                        <h1 className="text-3xl font-semibold">{mainData.category_name}</h1>
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <p className="mt-4">{mainData.category_description}</p>
                    </ScrollAnimation>

                    <div className="mt-5">
                        <h1 className="text-xl mb-6 font-medium">Price : <span className="font-bold">{mainData.category_price}$</span></h1>

                        <button 
                        onClick={() => handleAddToCart(id)}
                        className="w-full btn bg-[#9c88ff] text-white duration-500 hover:bg-[#8c7ae6] hover:tracking-widest flex gap-3">
                            <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;