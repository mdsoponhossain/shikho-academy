import logInImage from '../../assets/Login.jpg'
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:gap-10 mb-5 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={logInImage} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-serif mt-10 text-center font-bold">Sign In</h1>
                    <div className='my-5'>
                        <SocialLogin></SocialLogin>
                    </div>
                    <form className="card-body pt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent text-white">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;