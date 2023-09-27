import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Overlay.css';


const DonationsDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idIneteger = parseInt(id)
    const donation = donations.find(donation => donation.id === idIneteger)
    console.log(donation);

    return (
        <div>
            <h2 className='text-4xl mt-5'>This is donation details page</h2>
            <div className='relative w-1/2 h-[60%] mx-auto '>
                <img className={`w-full h-auto block mx-auto mb-3 rounded-b-2xl
                   `}
                

                    src={donation.img} alt="image" />
                    {/* <div className={`overlay text-gray-600 opacity-26`} ></div> */}

                <div className=''> 
                    <button className={`text-xl absolute bottom-3 left-5 font-semibold px-2 py-3 text-white rounded-md cursor-pointer
                    `}
                        style={{ backgroundColor: donation.text_and_button_bg }}
                    >Details & $290</button>
                </div>
            </div>
        </div>
    );
};

export default DonationsDetails;