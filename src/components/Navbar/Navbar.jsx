import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>


        {
            user ?
                <>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </>
                :

                <>
                    <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
                    <li><NavLink to='/sign-in'>Sign In</NavLink></li>
                </>
        }

    </>

    const userLogOut = () => {
        handleLogOut()
            .then(() => {
                console.log('user successfully log Out')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">shikho academy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            {
                user && <div className="navbar-end ">
                    <a className="hover:cursor-pointer">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">{user && <img className="w-[50px] h-[50px] rounded-3xl" src={user?.photoURL} alt={user?.displayName} />}</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={userLogOut} className="font-bold">Log Out</li>
                            </ul>
                        </div>

                    </a>
                </div>
            }
        </div>
    );
};

export default Navbar;