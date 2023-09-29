import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Overlay.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationsDetails = () => {
    const [card, setCard] = useState([])
    const donations = useLoaderData();
    const { id } = useParams();
    const idIneteger = parseInt(id)
    
    useEffect(() => {
        const cardDetails = donations?.find(donation => donation.id === idIneteger)
        setCard(cardDetails);
    }, [idIneteger, donations])
    
    const handleDonateButton = () => {

        const addedDonationsArray = [];

        const donateItems = JSON.parse(localStorage.getItem('donation'))

        localStorage.setItem('donation', addedDonationsArray)
        if (!donateItems) {
            addedDonationsArray.push(card)
            localStorage.setItem('donation', JSON.stringify(addedDonationsArray))
            toast('donation successful')

        } else {
            const isExist = donateItems.find(donate => donate.id === card.id)
            if (!isExist) {
                addedDonationsArray.push(...donateItems, card)
                localStorage.setItem('donation', JSON.stringify(addedDonationsArray))
                toast.success('donation successful', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            else {
                toast('already exist');
            }}
    }

    return (
        <div >
            <div className='relative w-[70%] lg:w-1/2 h-[60%] mx-auto mt-10 '>
                <img className={` w-full h-auto block mx-auto mb-3 rounded-b-2xl
                   `}
                    src={card.img} alt="image" />
                <div className='overlay overlay_1'>
                    <button onClick={handleDonateButton} className={` text-sm lg:text-xl absolute bottom-3 left-5 font-semibold  px-2 py-3 text-white rounded-md cursor-pointer
                    `}
                        style={{ backgroundColor: card.text_and_button_bg }}
                    >Details & $290</button>
                </div>
            </div>
            <h1 className='mt-4 text-2xl lg:text-3xl font-bold ml-12 lg:ml-80 pl-3 '>{card.title}</h1>
            <p className=' lg:ml-80 pl-16 lg:pl-11 font-md lg:text-xl'>{card.description}</p>
            <ToastContainer />
        </div>
    );
};

export default DonationsDetails;

