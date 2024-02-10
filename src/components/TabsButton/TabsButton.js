import React from 'react';

const TabsButton = (props) => {
    const {title, icon, state, setState, index} = props
    return (
        <div onClick={() => setState(index)} className={`${state === index ? 'bg-[#FF855F] text-white': "border"}  rounded-[10px] py-[8px] flex items-center justify-center gap-[5px]`}>
            {icon}
            {title}
        </div>
    );
};

export default TabsButton;