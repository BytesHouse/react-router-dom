import React from 'react';
import MainNavigation from "../MainNavigation/MainNavigation";
import AnimalServiceNavigation from "../AnimalServiceNavigation/AnimalServiceNavigation";

const BodyAside = () => {
    return (
        <div>
            <p className="text-[12p] font-[400] text-[#8A8A8A]">Main</p>
                <MainNavigation/>
            <p className="text-[12p] font-[400] text-[#8A8A8A]">Animal Services</p>
                <AnimalServiceNavigation/>
        </div>
    );
};

export default BodyAside;