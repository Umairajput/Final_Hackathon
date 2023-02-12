import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function UserFooter() {
    return (
        <div className="footer_main_div">
            <div className="footer_inner_div">
                <HomeIcon />
                <p> Home </p>
            </div>
            <div className="footer_inner_div">
                <ShoppingCartIcon />
                <p> Cart </p>
            </div>
            <div className="footer_inner_div">
                <Person2Icon />
                <p> Account </p>
            </div>
        </div>
    )
}
export default UserFooter