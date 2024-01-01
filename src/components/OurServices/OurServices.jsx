import image1 from '../../assets/gear.png'

const OurServices = () => {
    return (
        <div className="my-16">
            <h1 className="text-3xl text-center font-bold mb-16 font-serif">Our Services</h1>
            <div className='grid grid-cols-3 justify-between mt-5  gap-5 border-4 w-3/4 mx-auto'>
                <div className='grid items-center w-[300px]'>
                    <img className='[w-50px] h-[50px]' src={image1} alt="" />
                    <p>We are providing expert tutor to growing up your kids knowledge</p>
                </div>
                <div className='grid items-center w-[300px]'>
                    <img className='[w-50px] h-[50px]' src={image1} alt="" />
                    <p>We are providing expert tutor to growing up your kids knowledge</p>
                </div>
                <div className='grid items-center w-[300px]'>
                    <img className='[w-50px] h-[50px]' src={image1} alt="" />
                    <p>We are providing expert tutor to growing up your kids knowledge</p>
                </div>
                <div className='grid items-center w-[300px]'>
                    <img className='[w-50px] h-[50px]' src={image1} alt="" />
                    <p>We are providing expert tutor to growing up your kids knowledge</p>
                </div>
                <div className='grid items-center w-[300px]'>
                    <img className='[w-50px] h-[50px]' src={image1} alt="" />
                    <p>We are providing expert tutor to growing up your kids knowledge</p>
                </div>
                <div className='grid items-center w-[300px]'>
                    <img className='[w-50px] h-[50px]' src={image1} alt="" />
                    <p>We are providing expert tutor to growing up your kids knowledge</p>
                </div>
                
                
            </div>
       
        </div>
    );
};

export default OurServices;