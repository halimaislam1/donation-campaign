// import { json } from "react-router-dom";

// const getStoredDonations = () => {
//     const storedDonation = location.getItem('setDonation');
//     if(storedDonation){
//         return JSON.parse(storedDonation)
//     }
    // const storedDonations = localStorage.getItem('setDonation');
    // if (storedDonations) {
    //     return JSON.parse(storedDonations);
    // }
    // return [];
// }

// const saveStoredDonations = (id )=> {
//     const storedDonation = getStoredDonations();
//     const exist = storedDonation.fined(donateId => donateId === id);
//     if(!exist){
//         storedDonation.push(id);
//         localStorage.setItem('setDonation',JSON.stringify(storedDonation));
//     }
// }
// const saveStoredDonations = id => {
//     const storedDonations = getStoredDonations();
//     const exist = getStoredDonations.find(donationId => donationId == id);
//     if(!exist){
//         getStoredDonations.push(id);
//         localStorage.setItem('setDonation',JSON.stringify(storedDonations))
//     }
// }


//export {getStoredDonations , saveStoredDonations};