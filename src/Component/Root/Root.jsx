import { Outlet } from 'react-router-dom';
import Header from '../NavBar/NavBar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;