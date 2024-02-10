import React, {useEffect} from 'react';
import AllNewsBlock from "../AllNewsBlock/AllNewsBlock";
import LostFoundBlock from "../LostFoundBlock/LostFoundBlock";
import TopsNewsBlock from "../TopsNewsBlock/TopsNewsBlock";
import UpdatesBlock from "../UpdatesBlock/UpdatesBlock";

const NewsDisplay = () => {
    useEffect(() => {
        fetch("http://localhost:5001")
            .then(text => text.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div>
            <AllNewsBlock/>
            <LostFoundBlock/>
            <TopsNewsBlock/>
            <UpdatesBlock/>
        </div>
    );
};

export default NewsDisplay;