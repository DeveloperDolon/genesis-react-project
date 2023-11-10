import { useContext, useState } from "react";
import logo from "../../assets/logo1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import SocialMediaLogInButton from "../Componentes/SocialMediaLogInButton/SocialMediaLogInButton";

const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {createUserWithEmailPassword} = useContext(AuthContext);

    const [passwordView, setPasswordView] = useState(false);
    const [error, setError] = useState("");

    const handleShowPassword = () => {
        setPasswordView(!passwordView);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const picture = e.target.picture.value;
        setError("");

        if (password.length < 6) {
            setError("Password must be at least 6 characters!!");
            return;
        } else if (!(/[A-Z]/).test(password)) {
            setError("Password must have capital letter!!");
            return;
        } else if (!(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/).test(password)) {
            setError("Password must have special characters!!");
            return;
        }
        
        createUserWithEmailPassword(email, password)
        .then(res => {
            updateProfile(res.user, {
                displayName: name, photoURL: picture
        }).then(() => {
            Swal.fire(
                'Successfully registered!',
                'You clicked the button!',
                'success'
            );

            if(location.state) {
                navigate(location.state);
                return
            }
            navigate("/");
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: err.message,
                text: 'Something went wrong!',
              })
        })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: err.message,
                text: 'Something went wrong!',
              })
        })
    }


    return (

        <div className="h-full bg-gradient-to-tl from-[#00a8ff] to-indigo-900 w-full py-16 px-4">
            <div>
                <Link to="/" className="bg-[#9c88ff] flex w-fit duration-500 hover:bg-slate-500 items-center gap-2 text-white py-3 px-5 font-medium rounded-lg"><BiArrowBack className="text-2xl"></BiArrowBack>Back to Home</Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src={logo} alt="logo" />

                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Register your account</p>
                    <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Already have an account? <Link to="/login" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-semibold leading-none  text-gray-800 cursor-pointer"> Login here</Link></p>
                    <SocialMediaLogInButton></SocialMediaLogInButton>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label id="name" className="text-sm font-medium leading-none text-gray-800">
                                Username
                            </label>
                            <input aria-labelledby="name" type="text" name="name" required className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6">
                            <label id="picture" className="text-sm font-medium leading-none text-gray-800">
                                Profile Photo Link
                            </label>
                            <input aria-labelledby="picture" type="text" name="picture"  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        
                        <div className="mt-6">
                            <label id="email" className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" type="email" name="email" required className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6  w-full">
                            <label htmlFor="pass" className="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input id="pass" required name="password" type={passwordView ? "text" : "password"} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <span onClick={handleShowPassword}>{passwordView ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm mt-3 font-medium">
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="mt-8">
                            <button role="button"
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;