import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Person2Icon from '@mui/icons-material/Person2';
function Footer() {
    return (
        <div className="footer_main_div">
            <div className="footer_inner_div">
                <HomeIcon />
                <p> Home </p>
            </div>
            <div className="footer_inner_div">
                <ControlPointIcon />
                <p> Items </p>
            </div>
            <div className="footer_inner_div">
                <Person2Icon />
                <p> Account </p>
            </div>
        </div>
    )
}
export default Footer