import React from 'react';
import HeaderAside from "../HeaderAside/HeaderAside";
import BodyAside from "../BodyAside/BodyAside";
import GearModal from "../GearModal/GearModal";

const AsideBlock = (props) => {
    const {user} = props;
    return (
        <div className="border p-[10px] my-[20px] ml-[20px]">
            <HeaderAside userInfo={user}/>
            <BodyAside/>
            <GearModal/>
        </div>
    );
};

export default AsideBlock;