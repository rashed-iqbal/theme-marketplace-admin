import CustomModal from "../../components/CustomModal";
import FileIcon from "../../components/CustomSvg/FileIcon";
import LoadingAnimation from "../../components/CustomSvg/LoadingAnimation2";
import React from "react";

export type ModalProps = {
    isOpen: boolean;
    handleModal: () => void;
    list: {
        file: File;
        progress: number;
    }[];
    error: string;
    isUpdate: boolean;
};

function LoadingDialog({ isOpen, handleModal, list, isUpdate }: ModalProps) {
    return (
        <CustomModal
            isOpen={isOpen}
            onRequestClose={handleModal}
            className="w-[calc(100vw-40px)] sm:w-[343px] lg:w-[510px]  bg-[#fff] rounded-[6px] p-3 "
        >
            <div className="flex items-center h-[92px] flex-col">
                <div className="pt-4"></div>
                <LoadingAnimation color="#7266FC" height={40} width={40} />
                <div className="text-[#7266FC]">
                    {isUpdate ? "Updating" : "Creating"} Product...
                </div>
                <div className="pt-3"></div>
            </div>
            {list.length > 0 ? (
                <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
                    <div className="flex flex-col gap-3 h-full overflow-hidden">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="flex p-2 bg-[#E3E0FE] rounded"
                            >
                                <div className="w-8 h-8 overflow-hidden">
                                    <FileOrImage file={item.file} />
                                </div>

                                <div className="w-[calc(100%-32px)] pl-2 flex flex-col gap-1">
                                    <div className="text-sm truncate text-[#7266FC]">
                                        {item.file.name}
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="text-xs font-semibold text-[#7266FC]">
                                            {item.progress.toFixed(0)}%
                                        </div>
                                        <div className="w-full h-[6px] rounded-md bg-[#b6afff]">
                                            <div
                                                className="h-full bg-[#7266FC] rounded-md transition-all duration-200"
                                                style={{
                                                    width: `${item.progress.toFixed(
                                                        0
                                                    )}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="pt-4"></div>
            )}
        </CustomModal>
    );
}

function FileOrImage({ file }: { file: File }) {
    if (file.type.includes("image/")) {
        return (
            <img src={URL.createObjectURL(file)} className="w-full " alt="" />
        );
    } else {
        return (
            <div className="flex items-center w-full h-full justify-center">
                <FileIcon stroke="#7266fc" />
            </div>
        );
    }
}

export default LoadingDialog;
