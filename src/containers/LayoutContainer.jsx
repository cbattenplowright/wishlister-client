import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/navbar-components/Navbar';

const LayoutContainer = () => {
    return ( 
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
 
export default LayoutContainer;