import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Person2Icon from '@mui/icons-material/Person2';
function Footer() {
    return (
        <div className="footer_main_div">
            <Link to='/admin/home'>   <div className="footer_inner_div">
                <HomeIcon />
                <p> Home </p>
            </div>
            </Link>
            <Link to='/admin/add/product'>   <div className="footer_inner_div">
                <ControlPointIcon />
                <p> Items </p>
            </div>
            </Link>
            <Link to='/admin/prfile'> <div className="footer_inner_div">
                <Person2Icon />
                <p> Account </p>
            </div>
            </Link>
        </div>
    )
}
export default Footer