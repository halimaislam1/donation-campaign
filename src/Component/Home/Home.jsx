import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";
import { useState } from "react";

const Home = () => {
    const donations = useLoaderData();
    const [search, setSearched] = useState(donations);
    const handleCategoryNameSearch = (e) => {
        const search = document.getElementById('searchValue').value;
        e.preventDefault();
        if (search.length) {
            const filterCard = donations?.filter((card) => card.category_name.toLowerCase() === search.toLowerCase() );
            if (filterCard) {
                setSearched(filterCard);
            }}
        else {
            setSearched(donations);
        }
    }

    return (
        <div>
            <Banner handleCategoryNameSearch={handleCategoryNameSearch}></Banner>
            <DonationCard search = {search}></DonationCard>
        </div>
    );
};

export default Home;