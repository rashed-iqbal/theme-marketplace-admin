import Image from "next/image";
import React, { useState } from "react";
import MoboDraer from "./../MoboDraer/index";

const MoboNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <div className="px-[16px]  bg-white">
            <div className="flex items-center justify-between w-[100%] h-[58px]">
                <Image
                    src="/images/demoLogo.svg"
                    alt="logo"
                    width={132}
                    height={38}
                />
                <Image
                    src="/images/menuIcon.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    onClick={toggleDrawer}
                />
            </div>
            <MoboDraer isOpen={isOpen} toggleDrawer={toggleDrawer} setIsOpen={setIsOpen}/>
        </div>
    );
};

export default MoboNav;
