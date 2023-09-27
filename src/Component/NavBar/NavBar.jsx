import { NavLink } from "react-router-dom";

const NavBar = () => {
    // className = 'link'
    const links = <>
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink  to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statictics'>Statistics</NavLink></li>
    </>

    return (
        <div className="navbar  bg-base-100">
            <div className="navbar-start  flex gap-24">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap=" round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-md text-red-500 dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img  src="/logo.png" alt="donation capaign logo" />
                
            </div>
            <div className="navbar-end hidden lg:flex mr-20  ">
                <ul className="menu menu-horizontal px-1 text-red-500 ">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;