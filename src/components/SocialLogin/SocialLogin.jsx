import { useContext } from 'react';
import {FaFacebook, FaGoogle, FaTwitter} from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {HandleGoogleLogin,handleFacebookLogin, handleTwitterLogin} = useContext(AuthContext);
    const googleLogin =()=>{
        HandleGoogleLogin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const facebookLogin =()=>{
        handleFacebookLogin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const twitterLogin = ()=>{
        handleTwitterLogin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="flex  gap-4 text-2xl  justify-center font-bold font-serif">
            <div><FaGoogle onClick={googleLogin} className='text-3xl hover:cursor-pointer text-green-500 font-bold'></FaGoogle></div>
            <div><FaFacebook onClick={facebookLogin} className='text-3xl hover:cursor-pointer text-blue-500 font-bold'></FaFacebook></div>
            <div><FaTwitter onClick={twitterLogin} className='text-3xl hover:cursor-pointer text-blue-500 font-bold'></FaTwitter></div>
        </div>
    );
};

export default SocialLogin;