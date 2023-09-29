import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import SearchDonation from "./SearchDonation";

const Banner = ({handleCategoryNameSearch}) => {
    
    return (
        <div>
            <div className="hero min-h-screen  w-full" style={{ backgroundImage: 'url(https://i.ibb.co/thc4bFm/gift.png)' }}>
                <div className="hero-overlay bg-opacity-90 bg-[#fffffff2] bg-no-repeat"></div>
                <div className="hero-content text-center text-black">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <input id="searchValue" className=" input input-bordered join-item" placeholder="Search here..." />
                            <button onClick={handleCategoryNameSearch} className="btn join-item rounded-r-xl text-white bg-[#FF444A]">Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <SearchDonation  search={searched}></SearchDonation> */}
        </div>
    );
};

export default Banner;