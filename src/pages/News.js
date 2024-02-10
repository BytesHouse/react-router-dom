import React, {useState} from 'react';
import NavTabs from "../components/NavTabs/NavTabs";
import NewsDisplay from "../components/NewsDisplay/NewsDisplay";

const News = () => {
    const [state, setState] = useState(0)
    return (
        <div className="border p-[10px] my-[20px]">
            <NavTabs state={state} setState={setState} />
            <NewsDisplay/>
        </div>
    );
};

export default News;