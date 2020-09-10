import React from "react";
import { BuahProvider } from "./BuahContext";
import DaftarBuah from "./DaftarBuah";
import BuahForm from "./BuahForm";

const BuahIndex = () => {
    return (
        <div>
            <BuahProvider>
                <DaftarBuah />
                <BuahForm />
            </BuahProvider>
        </div>
    );
};

export default BuahIndex;