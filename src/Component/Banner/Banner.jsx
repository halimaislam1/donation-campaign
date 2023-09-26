
const Banner = () => {
    return (
        <div>
            {/* <h2 className="text-4xl">This is banner section</h2> */}
            <div className="hero min-h-screen  w-full" style={{ backgroundImage: 'url(https://i.ibb.co/thc4bFm/gift.png)' }}>
                <div className="hero-overlay bg-opacity-90 bg-[#fffffff2] bg-no-repeat"></div>
                <div className="hero-content text-center text-black">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Search here..." />
                            <button className="btn join-item rounded-r-xl text-white bg-[#FF444A]">Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;