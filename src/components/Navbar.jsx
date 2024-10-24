import { TbCoinFilled } from 'react-icons/tb';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto p-3">
            <div className="navbar bg-base-100">
                {/* hambargar  */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Fixture</a>
                            </li>
                            <li>
                                <a href="#">Teams</a>
                            </li>
                            <li>
                                <a href="#">Schedules</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Fixture</a>
                            </li>
                            <li>
                                <a href="#">Teams</a>
                            </li>
                            <li>
                                <a href="#">Schedules</a>
                            </li>
                        </ul>
                    </div>

                    {/* navnar button  */}
                    <div>
                        <a className="btn ">
                            0 Coin
                            <span className="text-orange-300 text-lg font-bold">
                                <TbCoinFilled />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
