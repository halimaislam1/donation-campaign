import { Link } from "react-router-dom";

const Cards = ({ donation }) => {
    const { id, img, category_name, title, category_bg, card_bg, text_and_button_bg } = donation;

    return (
        <div >
            <Link to={`/donationdetails/${id}`}>
                <div className={` card card-compact `} style={{ backgroundColor: card_bg }}>
                    <figure><img src={img} alt="donation img" /></figure>
                    <div className="card-body">
                        <h2 className={` rounded-sm mr-80 md:mr-72 lg:mr-44 `} style={{ backgroundColor: category_bg, color: text_and_button_bg }} >{category_name}</h2>
                        <p  style={{ color: text_and_button_bg }}>{title}</p>
                        
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Cards;