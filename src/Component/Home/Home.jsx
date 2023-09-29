import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl">This is home page</h2>
            <DonationCard></DonationCard>
        </div>
    );
};

export default Home;