import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

function UserFooter() {
    return (
        <div className="footer_main_div">
            <Link to='/user/home/page' >   <div className="footer_inner_div">
                <HomeIcon />
                <p> Home </p>
            </div>
            </Link>
            <Link to='/user/shopping/cart'  > <div className="footer_inner_div">
                <ShoppingCartIcon />
                <p> Cart </p>
            </div>
            </Link>
            <Link to='/user/profile'> <div className="footer_inner_div">
                <Person2Icon />
                <p> Account </p>
            </div>
            </Link>
        </div>
    )
}
export default UserFooter