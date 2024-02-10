import React from 'react';
import KebabMenu from "../icons/KebabMenu";

const HeaderPost = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
                <img className="w-[40px] h-[40px] border rounded-full" src="/" alt="avatar"/>
                <div>
                    <p className="font-[400] text-[18px]">Cookiekiller.design</p>
                    <p className="font-[400] text-[14px] text-[#8A8A8A]">16.11.2023 , 19:28</p>
                </div>
            </div>
            <div><KebabMenu/></div>
        </div>
    );
};

export default HeaderPost;