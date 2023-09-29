import React from 'react';
import Cards from '../Cards/Cards';

const SearchDonation = ({searched}) => {
    return (
        <div>
            <div>
                {
                    searched?.map(donation => <Cards key={donation.id}
                    donation={donation}></Cards>)
                }
            </div>
        </div>
    );
};

export default SearchDonation;