import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

function EyeOff(props: IconType) {
    return (
        <CustomIcon
            {...props}
            svg={({ height, width, className, groupClassName, color }) => (
                <svg
                    width={width}
                    className={className}
                    height={height}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_672_9487)">
                        <path
                            d="M14.9497 14.95C13.5252 16.0358 11.7906 16.6374 9.99967 16.6667C4.16634 16.6667 0.833008 10 0.833008 10C1.86958 8.06825 3.30729 6.38051 5.04967 5.05M8.24967 3.53333C8.82328 3.39907 9.41056 3.33195 9.99967 3.33333C15.833 3.33333 19.1663 10 19.1663 10C18.6605 10.9463 18.0572 11.8373 17.3663 12.6583M11.7663 11.7667C11.5375 12.0123 11.2615 12.2093 10.9548 12.3459C10.6481 12.4826 10.3171 12.556 9.98142 12.562C9.64574 12.5679 9.31231 12.5061 9.00102 12.3804C8.68972 12.2547 8.40694 12.0675 8.16955 11.8301C7.93215 11.5927 7.745 11.31 7.61927 10.9987C7.49353 10.6874 7.43178 10.3539 7.4377 10.0183C7.44363 9.68258 7.5171 9.35154 7.65374 9.04487C7.79038 8.73821 7.98739 8.46221 8.23301 8.23333"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M0.833008 0.833313L19.1663 19.1666"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_672_9487">
                            <rect width={20} height={20} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )}
        />
    );
}

export default EyeOff;
