import { useEffect, useState } from "react";
import { getLocalStorageData } from "../../utilitis/localStorage/localStorage";
import NavBar from "../../Componentes/NavBar/NavBar";
import Lottie from 'lottie-react';
import { useLoaderData } from "react-router-dom";
import animationData from "../../../../public/animation_lnhbio0c.json";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const data = useLoaderData();
    const cartItemsId = getLocalStorageData();
    const [rerender, setRerender] = useState(0);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleRemoveCart = () => {
        localStorage.removeItem("cart-item-id");
        setRerender(rerender+1);
    }

    const handleBooking = () => {
        Swal.fire(
            'You booked all!',
            'You clicked the button!',
            'success'
        )
        localStorage.removeItem("cart-item-id");
        setRerender(rerender+1);
    }

    useEffect(() => {
        const allItems = data.filter(item => cartItemsId.includes(item.id+""));
        let sum = 0;
        allItems.map(item => sum = item.category_price + sum);

        setTotalPrice(sum);

        setCartItems(allItems);
    }, [data, rerender]);

    return (
        <div>
            <div className="bg-[#353b48]">
                <dir className="max-w-7xl mx-auto">
                    <NavBar></NavBar>
                </dir>
            </div>

            <div className="max-w-7xl mx-auto">
                <div>
                    <h1 className="md:text-6xl text-4xl font-bold text-center pt-20">Booking Cart</h1>
                </div>
                {
                    cartItems.length > 0 ?
                    <div className="grid md:grid-cols-3 grid-cols-1 my-32 gap-10">
                        <div className="md:col-span-2 grid grid-cols-1 gap-5">
                            {
                                cartItems.map(item => <CartItem key={item.id} data={item}></CartItem>)
                            }
                        </div>

                        <div>
                            <h1 className="text-3xl font-medium text-center">Total Price : <span className="font-bold">{totalPrice}$</span></h1>

                            <div className="flex justify-center gap-5 mt-10">
                                <button
                                onClick={handleBooking}
                                className="btn px-5 bg-[#4cd137] text-white hover:text-black">Book now</button>

                                <button
                                onClick={handleRemoveCart}
                                 className="btn px-5 bg-[#e84118] text-white hover:text-black">Remove All</button>
                            </div>
                        </div>
                    </div>
                    : 
                    <div className="mt-16">
                        <Lottie
                                className="w-[30%] mx-auto"
                                options={defaultOptions}
                                animationData={animationData}
                                height={200}
                                width={200}
                        ></Lottie>

                        <h1 className="text-4xl text-center font-semibold text-red-500 mb-24">Your cart is Empty</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;