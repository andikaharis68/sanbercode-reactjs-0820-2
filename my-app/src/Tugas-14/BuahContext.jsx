import React, { useState, createContext } from "react";
export const BuahContext = createContext();

export const BuahProvider = (props) => {
    const [dataBuah, setdataBuah] = useState(null);
    const [ID, setID] = useState(null);

    return (
        <BuahContext.Provider value={[dataBuah, setdataBuah, ID, setID]}>
            {props.children}
        </BuahContext.Provider>
    );
};