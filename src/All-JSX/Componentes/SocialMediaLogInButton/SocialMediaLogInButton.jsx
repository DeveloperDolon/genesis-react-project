import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialMediaLogInButton = () => {

    const {logInWithGoogle, logInWithGithub, logInWithTwitter} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        logInWithGoogle()
        .then(() => {
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
    }

    const handleGithubLogin = () => {
        logInWithGithub()
        .then(() => {
            Swal.fire(
                'Successfully registered!',
                'You clicked the button!',
                'success'
            )
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
    }

    const handleTwitterLogin = () => {
        logInWithTwitter()
        .then(() => {
            Swal.fire(
                'Successfully registered!',
                'You clicked the button!',
                'success'
            )
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
    }
 

    return (
        <>
            <button
            onClick={handleGoogleLogin}
            aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
                <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
            </button>
            <button
            onClick={handleGithubLogin}
            aria-label="Continue with github" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg" alt="github" />
                <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
            </button>
            <button
            onClick={handleTwitterLogin}
            aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg" alt="twitter" />
                <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
            </button>
        </>
    );
};

export default SocialMediaLogInButton;