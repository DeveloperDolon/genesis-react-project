import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import defaultUserImg from "../../../assets/user.png";

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire(
                'Successfully logged out!',
                'You clicked the button!',
                'success'
              )
        }).catch((err) => console.log(err));
    }

    const publicRouteNavs = <>
            <li><NavLink className="duration-500 font-semibold hover:bg-[#7f8fa6]" to={"/"}>Home</NavLink></li>
            <li><NavLink className="duration-500 font-semibold hover:bg-[#7f8fa6]" to={"/about"}>About</NavLink></li>
            <li><NavLink className="duration-500 font-semibold hover:bg-[#7f8fa6]" to={"/contact"}>Contact Us</NavLink></li>
            <li><NavLink className=" duration-500 font-semibold hover:bg-[#7f8fa6]" to={"/cart"}>Cart</NavLink></li>
    </>
 
    return (
        <div>
            <div className="navbar py-5 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {publicRouteNavs}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case z-20"><img className="h-10" src={logo} alt="Logo Image" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2 bg-white z-30 rounded-lg p-3">
                        {publicRouteNavs}
                    </ul>
                </div>
                <div className="navbar-end z-20">
                    <div className="justify-center items-center gap-2 mr-2">
                        {user ? <img className="md:w-12 w-8 rounded-full outline-white outline" src={user.photoURL ? user.photoURL : defaultUserImg} alt="Profile Pic"/> : ""}
                    </div>

                    {
                    user ? 
                    <button
                    onClick={handleLogOut}
                    className="md:btn btn-sm bg-white"
                    >Log out</button>
                    :
                    <NavLink
                    to="/login"
                    className= "btn"
                    >Login</NavLink> 
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;