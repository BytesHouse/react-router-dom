import React from 'react';

const HeaderAside = ({userInfo}) => {
    return (
        <div className="flex flex-col gap-[10px]">
            <div className="text-[12px] font-[400] text-[#8A8A8A]">My account</div>
            <div className="flex items-center gap-[10px]">
                <div className="relative">
                    <img className="w-[40px] h-[40px] rounded-full" src={userInfo.photo} alt="avatar"/>
                    <div className="w-[15px] h-[15px] bg-[#FF855F] rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div>
                    <p className="text-[14px] font-[400] text-[#161616]">{userInfo.first_name} {userInfo.last_name}</p>
                    <p className="text-[12px] font-[400] text-[#8A8A8A]">{userInfo.role}</p>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default HeaderAside;