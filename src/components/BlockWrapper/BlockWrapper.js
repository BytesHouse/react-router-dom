import React from 'react';
import HeaderPost from "../HeaderPost/HeaderPost";

const BlockWrapper = ({children}) => {
    return (
        <div className="rounded-[10px] p-[10px] bg-white flex flex-col gap-[15px] border">
            <HeaderPost/>
            {children}
        </div>
    );
};

export default BlockWrapper;
// DRY - Don't Repeat Yourself