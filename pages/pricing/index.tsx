import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import Pricing from "../../components/Pricing/index";

export interface Price {
    monthly: number;
    annually?: number;
}

export interface Feature {
    text: string;
    isValid: boolean;
    _id: string;
}

export interface PriceDataType {
    price: Price;
    _id: string;
    title: string;
    features: Feature[];
    isTrial: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export type IntervalType = "monthly" | "annually";

const Prices = () => {
    return (
        <>
            <DefaultLayout>
                <div>
                    <Pricing />
                </div>
            </DefaultLayout>
        </>
    );
};

export default Prices;
