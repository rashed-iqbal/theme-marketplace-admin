import React from "react";
import CustomerPageComponent from "../components/CustomerPageComponent";
import { CustomerFilterProvider } from "../context/CustomerFilterContext";

const Customers = () => {
    return (
        <CustomerFilterProvider>
            <CustomerPageComponent />
        </CustomerFilterProvider>
    );
};

export default Customers;
