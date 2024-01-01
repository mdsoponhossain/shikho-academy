

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/xj68Rdb/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-2xl font-serif">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to <span className="text-5xl text-red-600">shikho academy</span></h1>
                    <p className="mb-5">We are aware to build a bright future of your kids.</p>
                    <button className="btn bg-[#29ada5] hover:bg-[#2f8a84] border-0 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;