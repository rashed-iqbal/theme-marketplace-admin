import React, { useState } from "react";
import UploadCheckbox from "./UploadCheckbox";
import UploadCard, { UploadCardHeader } from "./UploadCard";
import axios from "axios";
import UploadInput from "../Shared/UploadInput";
import PlusIcon from "../../components/CustomSvg/PlusIcon";
import data from "../../data/index.json";

function CategoriesSection() {
    const categories = data.categories;
    const [fieldOpen, setFieldOpen] = useState(false);
    return (
        <div>
            <div className="flex justify-between items-center">
                <UploadCardHeader text="Categories" />
                <button
                    onClick={() => setFieldOpen(!fieldOpen)}
                    className="p-[6px]  lg:p-[9px_12px] disabled:bg-[#9AA5B5] disabled:hover:bg-[#9AA5B5] cursor-pointer text-sm text-[#7266FC] font-medium leading-[22px] text-center  rounded-md"
                >
                    Add more
                </button>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-y-5 lg:gap-x-11 ">
                {categories.map((v, i) => (
                    <UploadCheckbox type="categories" key={i} text={v} />
                ))}
            </div>
            {fieldOpen && <AddCustomCategory />}
            <div className="pt-3"></div>
        </div>
    );
}

function AddCustomCategory() {
    const [value, setValue] = useState("");
    const handleSubmit = async () => {
        try {
            await axios.post("/api/categories", { value });
            setValue("");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="flex gap-4 mt-5">
            <div className="w-[calc(100%-56px)] lg:w-[calc(100%-64px)]">
                <UploadInput
                    className="lg:!p-[8px_16px]"
                    placeholder="type category"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <button
                onClick={handleSubmit}
                disabled={value ? false : true}
                className="enabled:hover:bg-[#473EAE] flex items-center justify-center disabled:bg-[#9AA5B5]  bg-[#7266FC]  rounded-md h-[40px] w-[40px] lg:w-[48px] p-2"
            >
                <PlusIcon stroke="#fff" />
            </button>
        </div>
    );
}

export default CategoriesSection;
