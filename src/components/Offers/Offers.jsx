

const Offers = () => {
    return (
        <div className="hero h-[600px] mb-16" style={{ backgroundImage: 'url(https://i.ibb.co/bbyCxB0/banner-2.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-xl font-serif">
                    <h1 className="mb-5 text-4xl font-bold">Admission is going on</h1>
                    <button className="btn bg-[#29ada5] hover:bg-[#2f8a84] border-0 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Offers;