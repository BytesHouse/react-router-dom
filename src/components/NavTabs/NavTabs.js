import React from 'react';
import TabsButton from "../TabsButton/TabsButton";
import AllNewsIcon from "../icons/AllNewsIcon";
import GlobusIcon from "../icons/GlobusIcon";
import FireIcon from "../icons/FireIcon";
import RefreshIcon from "../icons/RefreshIcon";

const NavTabs = ({state, setState}) => {
    return (
        <div className="border rounded-[10px] p-[5px] grid grid-cols-4 gap-[10px]">
            <TabsButton title="All News"     icon={<AllNewsIcon color={state === 0 ? 'white' : 'black' }/>} state={state} setState={setState} index={0}/>
            <TabsButton title="Lost & Found" icon={<GlobusIcon  color={state === 1 ? 'white' : 'black' }/>} state={state} setState={setState} index={1}/>
            <TabsButton title="Top News"     icon={<FireIcon    color={state === 2 ? 'white' : 'black' }/>} state={state} setState={setState} index={2}/>
            <TabsButton title="Updates"      icon={<RefreshIcon color={state === 3 ? 'white' : 'black' }/>} state={state} setState={setState} index={3}/>
        </div>
    );
};

export default NavTabs;