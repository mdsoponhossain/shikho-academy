import Banner from "../../components/Banner/Banner";
import Offers from "../../components/Offers/Offers";
import OurServices from "../../components/OurServices/OurServices";
import OurTutors from "../../components/OurTutors/OurTutors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Offers></Offers>
            <OurTutors></OurTutors>
        </div>
    );
};

export default Home;