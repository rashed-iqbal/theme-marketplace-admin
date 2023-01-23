import React, { useState } from "react";
import PricingInput from "./PricingInput";
import PricingFeatureItem from "./PricingFeatureItem";
import { GetEditPricingContext } from "../../context/EditPricingContext";

function PricingSecondSection() {
    const [offerText, setOfferText] = useState("");
    const [state, dispatch] = GetEditPricingContext();

    return (
        <div className="bg-white p-6 rounded-[6px]">
            <div className="flex justify-between w-full mb-[21px]">
                <p className="lg:text-[22px] xs:text-[16px] font-[500] text-[#252C48] mb-2">
                    Add offer
                </p>
                <button
                    type="button"
                    disabled={!!!offerText}
                    className="px-3 py-2 disabled:opacity-60 rounded-[8px] bg-[#7266FC] enabled:hover:bg-[#473EAE] transition-all duration-200 flex justify-center items-center gap-[11.33px] text-[14px] text-white font-semibold"
                    onClick={() => {
                        const features = state.features;
                        features.push({ text: offerText, isValid: true });
                        dispatch({
                            type: `features`,
                            value: features,
                        });
                        setOfferText("");
                    }}
                >
                    Add more
                </button>
            </div>

            <PricingInput
                placeholder="Type features name"
                value={offerText}
                onChange={(e) => setOfferText(e.target.value)}
            />
            <div className="mb-5"></div>
            {state?.features?.map((v, i) => (
                <PricingFeatureItem data={v} key={i} index={i} />
            ))}
        </div>
    );
}

export default PricingSecondSection;
