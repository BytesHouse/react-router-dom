import React from 'react';
import {navItemsMain} from "../../config/navigationMainConfig";
import {Link} from "react-router-dom";

const MainNavigation = () => {
    return (
        <ul className="flex flex-col gap-[5px]">
            {navItemsMain.map(item =>
                <Link className="text-[14px] font-[400] text-[#161616]"
                      to={item.href}
                >
                    {item.title}
                </Link>)}
        </ul>
    );
};

export default MainNavigation;