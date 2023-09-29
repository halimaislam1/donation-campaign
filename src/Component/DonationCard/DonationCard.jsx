import { useEffect, useState } from "react";
import Donation from "../Cards/Cards";
// import { data } from "autoprefixer";

const DonationCard = () => {
    const [donations, setDonations]=useState([]);
    

    useEffect(() => {
        fetch('donations.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    },[]);

    // console.log(donations);
// .slice(0,dataLength)
    return (
        
        <div>
           <div>
              <h2 className="text-4xl">donation card :{donations?.length} </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5 max-w-6xl mx-auto">
                {
                    donations.map(donation => 
                    <Donation key={donation.id} 
                    donation={donation}
                    ></Donation>)
                }
              </div>
           </div>
        </div>
    );
};

export default DonationCard;