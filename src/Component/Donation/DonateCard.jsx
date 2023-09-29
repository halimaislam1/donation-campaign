import { Link } from "react-router-dom";

const DonateCard = ({card}) => {

    const {id,img,title,text_and_button_bg,price,category_name,category_bg,card_bg} = card || {}


    return (
        <div className="mb-10">
            <div style={{backgroundColor:card_bg}} className="card card-side shadow-xl h-[200px] w-[400px] md:w-[350px] lg:w-[600px] mx-auto mt-8">
                <figure><img className="h-[200px] w-[200px]" src={img} alt="donate"/></figure>
                <div className="card-body">
                    <p ><small style={{color:text_and_button_bg,backgroundColor:category_bg,padding: '4px'}}>{category_name}</small></p>
                    <h2 className="font-bold">{title}</h2>
                    <p style={{color:text_and_button_bg}}>{price}</p>
                    <Link to={`/donations/${id}`}>
                        <div className="card-actions justify-start">
                            <button style={{backgroundColor:text_and_button_bg}} className="px-2 py-2 lg:px-4 lg:py-3  bg-green-600 text-white rounded-lg">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;