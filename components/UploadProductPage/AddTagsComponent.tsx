/* eslint-disable @next/next/no-img-element */
import UploadInput from "../Shared/UploadInput";
import { GetUploadProduct } from "../../context/UploadProductContext";
import axios from "axios";
import _ from "lodash";
import { OutsideClick } from "outsideclick-react";
import { useState } from "react";
import data from "../../data/index.json";

function AddTagsComponent() {
    const [dropdown, setDropdown] = useState(false);

    const [inputField, setInputField] = useState<string>("");

    const [state, dispatch] = GetUploadProduct();

    const [tagList, setTagList] = useState(
        data.tags.filter((item) => !(state.tags || []).includes(item))
    );

    return (
        <div>
            <OutsideClick
                onOutsideClick={() => setDropdown(false)}
                className="relative group"
            >
                <UploadInput
                    onFocus={() => setDropdown(true)}
                    className="group"
                    placeholder="Add tags"
                    value={inputField}
                    onKeyDown={async (e) => {
                        if (e.key == "Enter" && inputField) {
                            const newArr = state.tags;
                            newArr.push(inputField);
                            dispatch({
                                type: "tags",
                                value: _.uniq(newArr),
                            });
                            await AddCustomTag(inputField);
                            setDropdown(false);
                            setInputField("");
                        }
                    }}
                    onClick={() => setDropdown(true)}
                    onChange={(e) => {
                        setInputField(e.target.value);
                        !dropdown && setDropdown(true);
                    }}
                />
                <img
                    className="absolute top-0 my-auto bottom-0 right-3"
                    src="/icon/chevron-down.svg"
                    alt=""
                />
                {dropdown && (
                    <div className="bg-white max-h-[240px] overflow-y-auto shadow-md absolute w-full">
                        {inputField && (
                            <div
                                onClick={async () => {
                                    const newArr = state.tags;
                                    newArr.push(inputField);
                                    dispatch({
                                        type: "tags",
                                        value: _.uniq(newArr),
                                    });
                                    await AddCustomTag(inputField);

                                    setDropdown(false);
                                    setInputField("");
                                }}
                                className="text-sm hover:bg-[#F1F0FF] hover:text-[#7266FC] leading-[22px] font-normal p-[9px_16px] text-[#252C48] "
                            >
                                Select {'"'}
                                {inputField}
                                {'"'}
                            </div>
                        )}
                        {tagList.map((v, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    const newArr = state.tags;
                                    newArr.push(v);
                                    const newTagList = tagList.filter(
                                        (item) => !newArr.includes(item)
                                    );
                                    dispatch({ type: "tags", value: newArr });
                                    setTagList(newTagList);
                                    setDropdown(false);
                                }}
                                className="text-sm hover:bg-[#F1F0FF] hover:text-[#7266FC] leading-[22px] font-normal p-[9px_16px] text-[#252C48] "
                            >
                                {v}
                            </div>
                        ))}
                    </div>
                )}
            </OutsideClick>
            <div className="pt-4"></div>
            <div>
                {state.tags.length ? (
                    <div className="flex lg:py-3 flex-wrap gap-4">
                        {state.tags.map((v, i) => (
                            <div
                                key={i}
                                className="border gap-2 border-[#7266FC] rounded-[50px] px-4 py-2 flex"
                            >
                                <div className="text-sm leading-[22px] text-[#252C48] ">
                                    {v}
                                </div>
                                <img
                                    onClick={() => {
                                        dispatch({
                                            type: "tags",
                                            value: state.tags.filter(
                                                (_, index) => index !== i
                                            ),
                                        });

                                        const newArr = tagList;
                                        newArr.push(v);
                                        setTagList(newArr);
                                    }}
                                    className="cursor-pointer"
                                    src="/icon/cross-icon.svg"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

async function AddCustomTag(value: string) {
    try {
        await axios.post("/api/tags", { value });
    } catch (err) {
        console.log(err);
    }
}

export default AddTagsComponent;
