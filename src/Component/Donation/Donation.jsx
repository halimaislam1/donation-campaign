import { useEffect } from "react";
import { useState } from "react";
import DonateCard from "./DonateCard";

const Donation = () => {

    const [donation,setDonation] = useState([]);
    const [noDonationFound,setNoDonationFound] = useState('');
    const [showAll,setShowAll] = useState(4);

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donation'));
        if(donateItem){
            setDonation(donateItem);
        }
        else{
            setNoDonationFound('Donation not found')
        }
    },[])

    return (
        <div>
            {
                noDonationFound ? <p className="h-[80vh] text-2xl flex justify-center items-center">{noDonationFound}</p> 
                : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            donation?.slice(0,showAll).map(card=> <DonateCard key={card.id} card={card}></DonateCard>)
                        }
                    </div>

                    {donation.length > 4 && <div className={showAll === donation.length && 'hidden'}>
                        <button onClick={()=> setShowAll(donation.length)} className="px-4 py-3 mb-2 rounded-lg text-white bg-green-600 block mx-auto" >See All</button>
                    </div>}
                </div>
            }
        </div>
    );
};

export default Donation;
































































// import { useEffect, useState } from "react";
// // import { useLoaderData } from "react-router-dom";
// import Cards from "../Cards/Cards";
// // import DonationsDetails from "../DonationDetails/DonationsDetails";
// // import { getStoredDonations } from "../LocalStorage/LocalStorage";
// // import DonationCard from "../DonationCard/DonationCard";


// const Donation = ({donation}) => {
//     const [donationData, setDonationData] = useState([]);
//     const [noDonationFound, setNoDonationFound] = useState(false)

//     useEffect(() => {
//         const donateItems = JSON.parse(localStorage.getItem('donation'))
//         if (donateItems) {
//             setDonationData(donateItems)
//         } else {
//             setNoDonationFound('No donation found')
//         }
//     }, []);
//     console.log(donationData);

//     return (

//         <div>
//             <h2 className="text-4xl mt-5">this is donation page</h2>
//             <div>
//                 {noDonationFound ? <p className="mt-10 p-10 border-2 border-red-900 h-[80vh] justify-center items-center">{noDonationFound}</p> 
//                 :    
//                 <div>
                    
//                     {/* {
//                       donationData.map(donationcard => <DonationsDetails key = {donationcard.id} donation ={donation}></dona> )
//                     }  */}
//                 </div>}
//             </div>
//         </div>

        
//     );
// };

// export default Donation;


// {/* <h2 className="text-4xl">This is Donation Page:{donationData.length}</h2> */}








 // const donations = useLoaderData();
    // const [donationData, setDonationData] = useState();
    // const [isShowAll, setIsShowAll] = useState(false);

    // useEffect(() => {
    //     const setDonations = getStoredDonations();
    //     if (setDonations.length > 0) {
    //         const addedDonationData = donations?.filter(donation => setDonations.includes(donation.id))
    //         setDonationData(addedDonationData)
    //     }
    // }, [])
    // console.log(donationData);


//return 
    //  <div>
        //      <section className="md:mx-14 lg:mx-auto max-w-6xl  mt-20  mx-4">
        //         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        //             {/* {
        //                 isShowAll ?.donationData?.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>) :  donationData?.slice(0,4).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
        //             } */}

        //         </div> 
        //         <div className={`text-center ${donationData?.length === 4 ? 'hidden': 'block' }`}>
        //             <button className="btn, text-white ,bg-green-700, hover:bg-green-600,my-5" onClick={() => setIsShowAll(isShowAll)}>{isShowAll? 'Show something': ''}
        //             </button>
        //          </div>

        //      </section>

        // </div>
        //    <div>
        //         <h3 className="text-center text-4xl mt-8">This is donation page</h3>
        //         {
        //            noDonationFound? <p>{noDonationFound}</p> 
        //         }
        //    </div>
