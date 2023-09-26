import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h2 className="text-5xl font-bold mb-8">Oopsss!!!!!</h2>
            <Link 
            to='/'
            className="text-3xl font-bold "
            >Go Back To home</Link>
        </div>
    );
};

export default ErrorPage;