import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const DashboardIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.03333 1.66667H4.45C2.625 1.66667 1.66667 2.625 1.66667 4.44167V6.025C1.66667 7.84167 2.625 8.80001 4.44167 8.80001H6.025C7.84167 8.80001 8.8 7.84167 8.8 6.025V4.44167C8.80834 2.625 7.85 1.66667 6.03333 1.66667Z"
                        fill={stroke}
                    />
                    <path
                        d="M15.5583 1.66667H13.975C12.1583 1.66667 11.2 2.625 11.2 4.44167V6.025C11.2 7.84167 12.1583 8.80001 13.975 8.80001H15.5583C17.375 8.80001 18.3333 7.84167 18.3333 6.025V4.44167C18.3333 2.625 17.375 1.66667 15.5583 1.66667Z"
                        fill={stroke}
                    />
                    <path
                        d="M15.5583 11.1917H13.975C12.1583 11.1917 11.2 12.15 11.2 13.9667V15.55C11.2 17.3667 12.1583 18.325 13.975 18.325H15.5583C17.375 18.325 18.3333 17.3667 18.3333 15.55V13.9667C18.3333 12.15 17.375 11.1917 15.5583 11.1917Z"
                        fill={stroke}
                    />
                    <path
                        d="M6.03333 11.1917H4.45C2.625 11.1917 1.66667 12.15 1.66667 13.9667V15.55C1.66667 17.375 2.625 18.3333 4.44167 18.3333H6.025C7.84167 18.3333 8.8 17.375 8.8 15.5583V13.975C8.80834 12.15 7.85 11.1917 6.03333 11.1917Z"
                        fill={stroke}
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default DashboardIcon;