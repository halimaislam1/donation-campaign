import { useEffect, useState } from "react";
import Donation from "../Cards/Cards";

const DonationCard = ({search}) => {
    const [donations, setDonations]=useState([]);
    
    useEffect(() => {
        fetch('donations.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    },[]);

    return (
        
        <div>
           <div>    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5 max-w-6xl mx-auto">
                {
                    search.map(donation => 
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