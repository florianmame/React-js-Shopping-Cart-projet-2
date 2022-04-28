import React from "react";
import list from '../data';
import Cards from "./card";
import '../styles/amazon.css'; 

const Amazon = () => {

    return(
        <section>
        {list.map((item) => (
            <Cards key={item.id} item={item}/>
        ))}

    </section>
    );

};

export default Amazon;